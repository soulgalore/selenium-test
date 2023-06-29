const { Builder, Capabilities } = require('selenium-webdriver');

(async function example() {
  const caps = Capabilities.chrome();
  
  const driver = await new Builder()
    .forBrowser('chrome')
    .withCapabilities(caps)
    .build();
  try {
    await driver.get('https://www.apple.com');
  } finally {
    await driver.quit();
  }
})();