import BasePage from './BasePage';

class HomePage extends BasePage {
  get searchBox() {
    return $('#twotabsearchtextbox');
  }

  get sortByDropdown() {
    return $('#a-autoid-0-announce');
  }

  open() {
    super.open('https://www.amazon.com/');
  }

  searchFor(keyword) {
    this.searchBox.setValue(keyword);
    browser.keys('Enter');
  }

  sortBy(n) {
    this.sortByDropdown.click();
    $(`#s-result-sort-select_${n}`).click();
  }

  chooseDiscountedElement(){

  }
}

export default new HomePage();
