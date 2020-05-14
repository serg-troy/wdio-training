import Base from './Base';

class Homepage extends Base {
  get searchInput() {
    return $('#keyword');
  }
  get goBtn() {
    return $('#goBtn');
  }
  get offerPopup() {
    return $('bx-creative-1129507');
  }

  open() {
    super.open('https://www.kmart.com');
  }

  searchFor(str) {
    this.searchInput.setValue(str);
    this.goBtn.click();
  }

  //
  // skipOffer(){
  //   browser.waitUntil(this.offerPopup.isDisplayed);
  //
  // }
}

export default new Homepage();
