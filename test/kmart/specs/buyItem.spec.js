import Homepage from '../pages/Homepage';
import ProductPage from '../pages/ProductPage';

describe('test', ()=> {
  it('should open kmart page and check that page is correct', ()=> {
    Homepage.open();
    browser.maximizeWindow();
    expect(browser.getTitle()).contains('Kmart');
  });

  it('sho', ()=> {
    Homepage.searchFor('ps4 pro');
    $('.card-image').click();
    ProductPage.addToCartBtn.click();
    browser.pause(5000);
  });
});