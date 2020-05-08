import Homepage from '../pages/Homepage';

describe('test', ()=> {
  it('should open kmart page and check that page is correct', ()=> {
    Homepage.open();
    expect(browser.getTitle()).contains('Kmart');
  });

  it('sho', ()=> {
    Homepage.searchFor('ps4 pro');
    browser.pause(5000);
  });
});