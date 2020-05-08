import Homepage from "./pages/Homepage";

describe('test', ()=> {
  it('should open kmart page', ()=> {
    browser.url('https://www.kmart.com');
    expect(browser.getTitle()).eq('Kmart');
  })
});