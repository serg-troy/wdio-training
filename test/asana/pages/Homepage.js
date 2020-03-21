import Page from './Page';

class Homepage extends Page {
  open() {
    super.open('https://asana.com');
  }

  get loginBtn() {
    $('//a[@class="navigation__link navigation__sign-in hidden-logged-in"]');
  }
}

export default new Homepage();
