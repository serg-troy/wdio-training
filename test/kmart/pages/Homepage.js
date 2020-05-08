import Base from './Base';

class Homepage extends Base {
  get searchInput() {return $('#keyword')}
  get goBtn() {return $('#goBtn')}

  open() {
    super.open('https://www.kmart.com');
  }

  searchFor(str){
    this.searchInput.setValue(str);
    this.goBtn.click();
  }
}

export default new Homepage();
