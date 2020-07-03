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





}

export default new Homepage();
