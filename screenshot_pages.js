const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function takePageScreenshots() {
    // Create screenshots directory if it doesn't exist
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    const browser = await chromium.launch({ headless: true });
    
    // Define the pages to screenshot
    const pages = [
        { name: 'index', path: 'src/pages/index.html' },
        { name: 'agenti-ai', path: 'src/pages/agenti-ai.html' },
        { name: 'chi-siamo', path: 'src/pages/chi-siamo.html' },
        { name: 'servizi', path: 'src/pages/servizi.html' },
        { name: 'consulenza-strategica', path: 'src/pages/consulenza-strategica.html' },
        { name: 'manifatturiero', path: 'src/pages/settori/manifatturiero.html' },
        { name: 'moda-lusso', path: 'src/pages/settori/moda-lusso.html' },
        { name: 'servizi-finanziari', path: 'src/pages/settori/servizi-finanziari.html' }
    ];
    
    // Test different viewport sizes
    const viewports = [
        { name: 'desktop', width: 1920, height: 1080 },
        { name: 'laptop', width: 1366, height: 768 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'mobile', width: 375, height: 667 }
    ];
    
    for (const pageConfig of pages) {
        console.log(`\n📄 Processing page: ${pageConfig.name}`);
        
        // Check if file exists
        if (!fs.existsSync(pageConfig.path)) {
            console.log(`❌ File not found: ${pageConfig.path}`);
            continue;
        }
        
        for (const viewport of viewports) {
            const page = await browser.newPage({
                viewport: { width: viewport.width, height: viewport.height }
            });
            
            try {
                // Load the HTML file
                const filePath = `file://${path.resolve(pageConfig.path)}`;
                await page.goto(filePath, { waitUntil: 'networkidle' });
                
                // Wait for content to load
                await page.waitForTimeout(2000);
                
                // Take full page screenshot
                await page.screenshot({
                    path: `screenshots/${pageConfig.name}_${viewport.name}_full.png`,
                    fullPage: true
                });
                
                // Take viewport screenshot
                await page.screenshot({
                    path: `screenshots/${pageConfig.name}_${viewport.name}_viewport.png`,
                    fullPage: false
                });
                
                console.log(`✓ Screenshots taken for ${pageConfig.name} - ${viewport.name} (${viewport.width}x${viewport.height})`);
                
            } catch (error) {
                console.log(`❌ Error capturing ${pageConfig.name} - ${viewport.name}: ${error.message}`);
            } finally {
                await page.close();
            }
        }
    }
    
    await browser.close();
    console.log('\n🎉 All screenshots saved in "screenshots" directory');
    
    // List all generated screenshots
    const screenshots = fs.readdirSync('screenshots').filter(file => file.endsWith('.png'));
    console.log(`\n📊 Generated ${screenshots.length} screenshots:`);
    screenshots.forEach(screenshot => console.log(`   - ${screenshot}`));
}

// Run the screenshot function
takePageScreenshots().catch(console.error);