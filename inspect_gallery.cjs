const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5174/esummit', { waitUntil: 'networkidle0' });
  const data = await page.evaluate(() => {
    const gallery = document.querySelector('.esummit2026-gallery');
    const container = document.querySelector('.esummit-masonry-container');
    const items = [...document.querySelectorAll('.esummit-masonry-item')].map(el => {
      const r = el.getBoundingClientRect();
      const st = window.getComputedStyle(el);
      return { id: el.dataset.key, left: st.left, rLeft: r.left, width: st.width };
    });
    return {
      galleryClass: gallery ? gallery.className : null,
      galleryRect: gallery ? gallery.getBoundingClientRect() : null,
      containerRect: container ? container.getBoundingClientRect() : null,
      items: items.slice(0, 3)
    };
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
