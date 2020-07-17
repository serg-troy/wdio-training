import SandPage from './SandPage';

describe('SANDBOX', () => {
  it('should pass', () => {
    browser.url('https://www.amazon.com/s?k=laptop&rh=n%3A565108&ref=nb_sb_noss');
    SandPage.clickSearchItem(5)
  });
});
