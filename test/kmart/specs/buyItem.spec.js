import Homepage from '../pages/Homepage';
import ProductPage from '../pages/ProductPage';

describe('Test KMart', () => {
  it('should open kmart page and check that page is correct', () => {
    Homepage.open();
    browser.maximizeWindow();
    expect(browser.getTitle()).contains('Kmart');
  });

  it('should find PS4 Pro and add it to cart', () => {
    Homepage.searchFor('ps4 pro');
    $('.card-image').click();
    ProductPage.addToCartBtn.click();
  });
});
