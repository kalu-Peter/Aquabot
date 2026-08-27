const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:\Program Files\Google\Chrome\Application\chrome.exe' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:8081', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/shots/hero1.png' });
  console.log('shot1 done');
  await page.waitForTimeout(6500);
  await page.screenshot({ path: '/tmp/shots/hero2.png' });
  console.log('shot2 done');
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log('console errors:', errors);
  await browser.close();
})();
