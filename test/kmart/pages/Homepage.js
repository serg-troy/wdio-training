import Base from './Base';

class Homepage extends Base {


  get loginBtn() {
    $('//a[@class="navigation__link navigation__sign-in hidden-logged-in"]');
  }
}

export default new Homepage();
