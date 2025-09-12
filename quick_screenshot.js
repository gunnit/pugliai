const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function takeQuickScreenshots() {
    // Create screenshots directory if it doesn't exist
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    const browser = await chromium.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Just screenshot the main pages to check logos
    const pages = [
        { name: 'index', path: 'index.html' },
        { name: 'chi-siamo', path: 'chi-siamo.html' },
        { name: 'servizi', path: 'servizi.html' }
    ];
    
    for (const pageConfig of pages) {
        console.log(`\n📄 Processing page: ${pageConfig.name}`);
        
        // Check if file exists
        if (!fs.existsSync(pageConfig.path)) {
            console.log(`❌ File not found: ${pageConfig.path}`);
            continue;
        }
        
        const page = await browser.newPage({
            viewport: { width: 1920, height: 1080 }
        });
        
        try {
            // Load the HTML file via HTTP server
            const url = `http://localhost:8000/${pageConfig.path}`;
            await page.goto(url, { waitUntil: 'networkidle' });
            
            // Wait for logos to load
            await page.waitForTimeout(2000);
            
            // Take viewport screenshot focusing on header
            await page.screenshot({
                path: `screenshots/${pageConfig.name}_header_with_logo.png`,
                clip: { x: 0, y: 0, width: 1920, height: 150 }
            });
            
            // Scroll to footer and take screenshot
            await page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });
            await page.waitForTimeout(1000);
            
            // Get footer position
            const footer = await page.$('.footer');
            if (footer) {
                const box = await footer.boundingBox();
                if (box) {
                    await page.screenshot({
                        path: `screenshots/${pageConfig.name}_footer_with_logo.png`,
                        clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 300) }
                    });
                }
            }
            
            console.log(`✓ Screenshots taken for ${pageConfig.name}`);
            
        } catch (error) {
            console.log(`❌ Error capturing ${pageConfig.name}: ${error.message}`);
        } finally {
            await page.close();
        }
    }
    
    await browser.close();
    console.log('\n🎉 Logo screenshots saved in "screenshots" directory');
}

// Run the screenshot function
takeQuickScreenshots().catch(console.error);