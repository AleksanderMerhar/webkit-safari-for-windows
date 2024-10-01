import { test } from '@playwright/test';

test('get started link', async () => {
  const { webkit } = require('playwright');

  // Launch the browser with custom window size
  const browser = await webkit.launch({
    headless: false, // Make sure it's headful to see the window size effect
    // args: ['--window-size=1280,720'] // Force window size
  });

  // Create a new context with a custom viewport size
  const context = await browser.newContext({
    // viewport: { width: 1200, height: 800 }, // Force viewport size (content size)
    deviceScaleFactor: 1, // Force device scale factor to 1 to avoid zooming

  });

  const page = await context.newPage();

    /* I tried to fix font not working, but this doesn't work
      * Unless you manually inspect the page and add it using webkit devtools
      */
  //  await page.addStyleTag({
  //   content: `
  //     body {
  //       font-family: "Gill Sans", sans-serif !important;
  //     }
  //   `,
  //   });

  

    // Inject the viewport meta tag to control scaling
    await page.addInitScript(() => {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'initial-scale=1, maximum-scale=1';
      document.head.appendChild(meta);



      /* I tried to fix font not working, but this doesn't work
       * Unless you manually inspect the page and add it using webkit devtools
       */
      // const style = document.createElement('style');
      // style.innerHTML = `
      //   {
      //     font-family: 'Gill Sans', sans-serif !important;
      //   }
      // `;
      // document.head.appendChild(style);
    });
  
  await page.goto('http://localhost:4200');
  await page.waitForTimeout(10 * 60000); // Wait 10 * 60 seconds for manual interaction
  await browser.close();
});

