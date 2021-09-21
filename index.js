const puppeteer = require('puppeteer-core');


async function start() {
    let launchOptions = { headless: false, 
        executablePath: '/usr/bin/google-chrome-stable', // because we are using puppeteer-core so we must define this option
        args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions)
    const page = await browser.newPage()
    await page.goto("https://dev.to/sonyarianto/practical-puppeteer-playing-with-puppeteer-core-7i0")
    await page.screenshot({path: "dev.png"})
    await browser.close()
}

start()
