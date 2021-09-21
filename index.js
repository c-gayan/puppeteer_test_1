const puppeteer = require('puppeteer-core');


async function start() {
    let launchOptions = { 
        headless: false, 
        executablePath: '/usr/bin/google-chrome-stable', // because we are using puppeteer-core so we must define this option
        args: ['--start-maximized'] 
    };

    const browser = await puppeteer.launch(launchOptions)
    const page = await browser.newPage()
    await page.goto("https://www.npmjs.com/package/puppeteer-core")
    await page.screenshot({path: "dev.png", fullPage: true})
    await browser.close()
}

start()
