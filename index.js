const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const URL = "https://www.billboard.com/charts/hot-100/";

async function scrape() {
    const browser = await puppeteer.launch({ headless: "new", defaultViewport: null });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    await page.screenshot({ path: "bb100.png", fullPage: true });


    const chartData = await page.evaluate(() => {
        const root = document.querySelectorAll(".o-chart-results-list-row-container");

        return Array.from(root).map((song) => {
            const Number = song.querySelector(".o-chart-results-list__item > span").innerText;
            const Title = song.querySelector(".o-chart-results-list__item > h3").innerText;
            const Artist = song.querySelector(".o-chart-results-list__item > h3 + span").innerText;
            return { Number, Title, Artist };
        });
    });

    await fs.writeFile("chartData.json", JSON.stringify(chartData));

    await browser.close();
}

scrape();