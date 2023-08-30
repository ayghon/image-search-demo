describe('Search Demo', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the Home screen', async () => {
    await expect(element(by.text('Home'))).toBeVisible();
  });

  it('should navigate to Results screen', async () => {
    await element(by.id('q')).typeText('cat');
    await element(by.text('Search')).tap();

    await expect(element(by.text('Results'))).toBeVisible();
  });

  it('should handle field validation', async () => {
    await element(by.text('Search')).tap();
    await expect(element(by.text('q is a required field'))).toBeVisible();

    await element(by.id('q')).typeText('cat');
    await expect(element(by.text('q is a required field'))).not.toBeVisible();
  });

  it('should like images and show number of likes in Home screen', async () => {
    await expect(element(by.text('Likes: 0'))).toBeVisible();
    await element(by.id('q')).typeText('cat');
    await element(by.text('Search')).tap();

    await element(by.text('Like')).atIndex(0).tap();
    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.text('Home')).tap();
    }

    await expect(element(by.text('Likes: 1'))).toBeVisible();
  });
});
