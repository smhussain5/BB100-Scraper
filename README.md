# Billboard Hot 100 Web Scraper

Web scraper that collects data from Billboard's Hot 100 Chart.

## Problem 🤔

Access to current data from other websites allows clients to extract valuable insghts for academic research, business trends, content aggregation, etc. Ideally, this is accomplished via an API because they are reliable and structured; however, not every website has an API for clients to consume.

## Solution 💡

Web scraping is the process of extracting data by "scraping" text content associated with specific CSS selectors. Although web scraping is a viable alternative to an API, it requires manual formatting/structuring and can violate a website's TOS.

This project extracts [Billboard Hot 100](https://www.billboard.com/charts/hot-100/)'s data using Node.js and Puppeteer. Specifically, it launches a web browser, captures a full-length screenshot, and returns extracted data as a JSON object.

## Technologies Used ⚙

- JavaScript
- Node.js
- Puppeteer
- Visual Studio Code

## Insights 💭

Through this project, I was able appreciate the power of Puppeteer and its functionalities (automated browser-launching, crawling, etc). It was challenging to find specific CSS selectors that would extract the correct data, but it was mostly achieved via trial and error. Future improvements may include extracting data from Billboard's other charts, displaying data via UIs, and/or automating the process to occur every specified interval.

## Contact 📲

[![Static Badge](https://img.shields.io/badge/Send%20me%20an%20email-212121?style=flat-square&logo=gmail&logoColor=EA4335)](mailto:shababhussain525@gmail.com?)<br>
[![Static Badge](https://img.shields.io/badge/Connect_with_me_on_LinkedIn-212121?style=flat-square&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/shabab-h)<br>
[![Static Badge](https://img.shields.io/badge/Follow_me_on_Twitter-212121?style=flat-square&logo=twitter&logoColor=1D9BF0)](https://twitter.com/shussain_5)<br>
[![Static Badge](https://img.shields.io/badge/Follow_me_on_GitHub-212121?style=flat-square&logo=github&logoColor=FAFAFA)](https://github.com/smhussain5)<br>
