const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

function CreatePDF (data) {
    return new Promise(async (resolve, reject) => {
        try {
            // Create a browser instance
            const browser = await puppeteer.launch(
                {
                    executablePath: "/usr/bin/chromium-browser",
                    args:["--no-sandbox","--disable-setuid-sandbox"]
                }
            );

            // Create a new page
            const page = await browser.newPage();

            //Get HTML content from HTML file
            await page.setContent(data.template, { waitUntil: 'domcontentloaded' });
            // To reflect CSS used for screens instead of print
            await page.emulateMediaType('screen');

            // Downlaod the PDF
            const pdf = await page.pdf({
                path: data.path,
                margin: { top: '50px', right: '20px', bottom: '50px', left: '50px' },
                printBackground: true,
                format: 'A4'
            });

            // Close the browser instance
            await browser.close();

            resolve(data.fullPath);

        } catch (e) {
            console.log('CreatePDF err**', e);
            reject(e);
        }
    })
}

module.exports.CreatePDF = CreatePDF;