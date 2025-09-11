const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function takeScreenshots() {
    // Create screenshots directory if it doesn't exist
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    const browser = await chromium.launch({ headless: true });
    
    // Test different viewport sizes
    const viewports = [
        { name: 'desktop', width: 1920, height: 1080 },
        { name: 'laptop', width: 1366, height: 768 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'mobile', width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
        const page = await browser.newPage({
            viewport: { width: viewport.width, height: viewport.height }
        });
        
        // Load the stylesheet.html file
        const filePath = `file://${path.resolve('stylesheet.html')}`;
        await page.goto(filePath);
        
        // Wait for content to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Extra wait for animations
        
        // Take full page screenshot
        await page.screenshot({
            path: `screenshots/stylesheet_${viewport.name}_full.png`,
            fullPage: true
        });
        
        // Take viewport screenshot
        await page.screenshot({
            path: `screenshots/stylesheet_${viewport.name}_viewport.png`,
            fullPage: false
        });
        
        console.log(`✓ Screenshots taken for ${viewport.name} (${viewport.width}x${viewport.height})`);
        
        await page.close();
    }
    
    await browser.close();
    console.log('\nAll screenshots saved in "screenshots" directory');
}

// Run the screenshot function
takeScreenshots().catch(console.error);