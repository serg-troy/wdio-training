import HomePage from '../pages/HomePage';

describe('find and add to cart specified item', () => {
  before(() => {
    HomePage.open();
  });

  it('should ', () => {
    HomePage.searchFor('pen');
    HomePage.sortBy(1);
    const arr = []
    let x = $$('[role="listitem"]')
      x.forEach(el => arr.push(el.getText()));
    console.log('HERE!!!!!!!!', arr)
    browser.pause(2000);
  });
});
