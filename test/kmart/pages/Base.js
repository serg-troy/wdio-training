export default class Base {
  open(path){
    browser.url(path);
  }

  searchFor(str) {
    this.searchInput.setValue(str);
    this.goBtn.click();
  }
}
