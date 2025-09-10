// Service Worker for PugliAI website
// Provides caching, offline functionality, and PWA features

const CACHE_NAME = 'pugliai-v1.1.0';
const STATIC_CACHE = 'pugliai-static-v1.1.0';
const DYNAMIC_CACHE = 'pugliai-dynamic-v1.1.0';

// Assets to cache immediately
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/contact-form.js',
    '/includes/loader.js',
    '/includes/menu.html',
    '/includes/footer.html',
    '/img/pittogramma.png',
    // Service pages
    '/agenti-ai.html',
    '/agenti-ai.css',
    '/consulenza-strategica.html',
    '/consulenza-strategica.css',
    '/infrastrutture-ai.html',
    '/infrastrutture-ai.css',
    // Sector pages
    '/manifatturiero.html',
    '/manifatturiero.css',
    '/moda-lusso.html',
    '/moda-lusso.css',
    '/servizi-finanziari.html',
    '/servizi-finanziari.css',
    '/turismo.html',
    '/turismo.css',
    '/sanita.html',
    '/sanita.css',
    '/alimentare.html',
    '/alimentare.css',
    // Company pages
    '/team.html',
    '/team.css',
    '/mission.html',
    '/certificazioni.html',
    // Legal pages
    '/contatti.html',
    '/privacy.html',
    '/cookies.html',
    '/terms.html',
    // Fonts
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&family=Playfair+Display:wght@400;600&display=swap',
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    'https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2',
    'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qO0isEw.woff2'
];

// Resources to cache on demand
const CACHE_STRATEGIES = {
    images: {
        strategy: 'cache-first',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        maxEntries: 100
    },
    api: {
        strategy: 'network-first',
        maxAge: 5 * 60 * 1000, // 5 minutes
        maxEntries: 50
    },
    css: {
        strategy: 'cache-first',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        maxEntries: 30
    },
    js: {
        strategy: 'cache-first',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        maxEntries: 30
    }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then((cache) => {
                console.log('[SW] Caching static assets...');
                return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
            }),
            caches.open(DYNAMIC_CACHE)
        ]).then(() => {
            console.log('[SW] Service worker installed successfully');
            // Skip waiting to activate immediately
            return self.skipWaiting();
        }).catch((error) => {
            console.error('[SW] Installation failed:', error);
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => 
                            cacheName.startsWith('pugliai-') && 
                            ![STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)
                        )
                        .map(cacheName => {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        })
                );
            }),
            // Take control of all clients
            self.clients.claim()
        ]).then(() => {
            console.log('[SW] Service worker activated successfully');
        }).catch((error) => {
            console.error('[SW] Activation failed:', error);
        })
    );
});

// Fetch event - handle requests with caching strategies
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Handle different types of requests
    if (url.origin === location.origin) {
        // Same origin requests
        event.respondWith(handleSameOriginRequest(request));
    } else if (isFont(request)) {
        // Font requests
        event.respondWith(handleFontRequest(request));
    } else if (isImage(request)) {
        // Image requests
        event.respondWith(handleImageRequest(request));
    } else if (isAPI(request)) {
        // API requests
        event.respondWith(handleAPIRequest(request));
    }
});

// Handle same-origin requests (HTML, CSS, JS)
async function handleSameOriginRequest(request) {
    const url = new URL(request.url);
    
    // Handle navigation requests (HTML pages)
    if (request.mode === 'navigate' || 
        request.headers.get('accept')?.includes('text/html')) {
        return handleNavigationRequest(request);
    }
    
    // Handle CSS and JS files
    if (isCSS(request) || isJS(request)) {
        return handleStaticAsset(request, STATIC_CACHE);
    }
    
    // Default: try cache first, then network
    return handleCacheFirst(request, DYNAMIC_CACHE);
}

// Handle navigation requests with offline fallback
async function handleNavigationRequest(request) {
    try {
        // Try network first for fresh content
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            // Cache successful responses
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
        
        throw new Error('Network response not ok');
    } catch (error) {
        // Fall back to cache
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // If specific page not cached, try to serve the main page
        const fallbackResponse = await caches.match('/index.html');
        if (fallbackResponse) {
            return fallbackResponse;
        }
        
        // Last resort: offline page (if available)
        return new Response(
            createOfflinePage(),
            {
                headers: { 'Content-Type': 'text/html' },
                status: 503,
                statusText: 'Service Unavailable'
            }
        );
    }
}

// Handle static assets (CSS, JS)
async function handleStaticAsset(request, cacheName) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            // Return cached version and update in background
            updateAssetInBackground(request, cacheName);
            return cachedResponse;
        }
        
        // Not in cache, fetch from network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        // Return cached version if network fails
        return caches.match(request) || new Response('Asset not available offline', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Handle font requests
async function handleFontRequest(request) {
    return handleCacheFirst(request, STATIC_CACHE, {
        maxAge: CACHE_STRATEGIES.css.maxAge
    });
}

// Handle image requests
async function handleImageRequest(request) {
    return handleCacheFirst(request, DYNAMIC_CACHE, {
        maxAge: CACHE_STRATEGIES.images.maxAge,
        maxEntries: CACHE_STRATEGIES.images.maxEntries
    });
}

// Handle API requests
async function handleAPIRequest(request) {
    return handleNetworkFirst(request, DYNAMIC_CACHE, {
        maxAge: CACHE_STRATEGIES.api.maxAge
    });
}

// Cache-first strategy
async function handleCacheFirst(request, cacheName, options = {}) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse && !isExpired(cachedResponse, options.maxAge)) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
            
            // Clean up old entries if needed
            if (options.maxEntries) {
                await cleanupCache(cacheName, options.maxEntries);
            }
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        throw error;
    }
}

// Network-first strategy
async function handleNetworkFirst(request, cacheName, options = {}) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse && !isExpired(cachedResponse, options.maxAge)) {
            return cachedResponse;
        }
        throw error;
    }
}

// Update asset in background
function updateAssetInBackground(request, cacheName) {
    // Don't await this - let it run in background
    fetch(request).then(response => {
        if (response.ok) {
            caches.open(cacheName).then(cache => {
                cache.put(request, response);
            });
        }
    }).catch(() => {
        // Ignore background update failures
    });
}

// Helper functions
function isImage(request) {
    return request.headers.get('accept')?.includes('image/') ||
           /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(new URL(request.url).pathname);
}

function isCSS(request) {
    return request.headers.get('accept')?.includes('text/css') ||
           /\.css$/i.test(new URL(request.url).pathname);
}

function isJS(request) {
    return request.headers.get('accept')?.includes('application/javascript') ||
           /\.js$/i.test(new URL(request.url).pathname);
}

function isFont(request) {
    return /\.(woff2?|eot|ttf|otf)$/i.test(new URL(request.url).pathname) ||
           request.url.includes('fonts.googleapis.com') ||
           request.url.includes('fonts.gstatic.com');
}

function isAPI(request) {
    return request.url.includes('/api/') ||
           request.url.includes('formspree.io') ||
           request.url.includes('emailjs.com');
}

function isExpired(response, maxAge) {
    if (!maxAge) return false;
    
    const dateHeader = response.headers.get('date');
    if (!dateHeader) return false;
    
    const responseDate = new Date(dateHeader);
    const now = new Date();
    
    return (now.getTime() - responseDate.getTime()) > maxAge;
}

// Clean up cache entries
async function cleanupCache(cacheName, maxEntries) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    if (keys.length > maxEntries) {
        const entriesToDelete = keys.slice(0, keys.length - maxEntries);
        await Promise.all(
            entriesToDelete.map(request => cache.delete(request))
        );
        console.log(`[SW] Cleaned up ${entriesToDelete.length} entries from ${cacheName}`);
    }
}

// Create offline page HTML
function createOfflinePage() {
    return `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offline - PugliAI</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #0A1628 0%, #1B365D 100%);
            color: white;
            text-align: center;
        }
        .offline-container {
            padding: 2rem;
            max-width: 600px;
        }
        .offline-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #00E676;
        }
        p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #00E676;
            color: #0A1628;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }
        .btn:hover {
            background: #00C853;
        }
    </style>
</head>
<body>
    <div class="offline-container">
        <div class="offline-icon">📡</div>
        <h1>Connessione Non Disponibile</h1>
        <p>
            Sembra che tu sia offline o che ci sia un problema di connessione. 
            Alcune pagine potrebbero essere disponibili dalla cache del browser.
        </p>
        <button class="btn" onclick="window.location.reload()">
            Riprova
        </button>
    </div>
    
    <script>
        // Auto-retry when connection is restored
        window.addEventListener('online', () => {
            window.location.reload();
        });
    </script>
</body>
</html>
    `;
}

// Handle skip waiting message
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Background sync for form submissions (if supported)
self.addEventListener('sync', (event) => {
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(syncPendingForms());
    }
});

// Sync pending form submissions
async function syncPendingForms() {
    try {
        // Get pending forms from IndexedDB or localStorage
        const pendingForms = JSON.parse(localStorage.getItem('pendingForms') || '[]');
        
        for (const formData of pendingForms) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    // Remove successfully synced form
                    const updatedForms = pendingForms.filter(f => f.id !== formData.id);
                    localStorage.setItem('pendingForms', JSON.stringify(updatedForms));
                }
            } catch (error) {
                console.error('[SW] Failed to sync form:', error);
            }
        }
    } catch (error) {
        console.error('[SW] Background sync error:', error);
    }
}

// Log cache usage statistics
async function logCacheStats() {
    try {
        const cacheNames = await caches.keys();
        for (const cacheName of cacheNames) {
            const cache = await caches.open(cacheName);
            const keys = await cache.keys();
            console.log(`[SW] Cache ${cacheName}: ${keys.length} entries`);
        }
    } catch (error) {
        console.error('[SW] Error logging cache stats:', error);
    }
}

// Periodic cache cleanup
setInterval(() => {
    logCacheStats();
    
    // Clean up dynamic cache
    cleanupCache(DYNAMIC_CACHE, 50);
}, 24 * 60 * 60 * 1000); // Once per day

console.log('[SW] Service worker script loaded');