# Installation
Install node,npm, playwright
* npm install playwright
* npm i
* npx playwright install webkit (this step is probably not needed)

# How to test webkit (safari)
Run 'npx playwright test --project=webkit'

# Modify time for testing
If the current timeoute for is not enough, you can modify
* playwright.config.ts > defineConfig >  timeout: 30_000_000
* tests\webkit-localhost-test.spec.ts > await page.waitForTimeout(10 * 60000);
