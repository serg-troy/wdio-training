class AppPage {
  get inputFieldFrom() {
    return $('[name="fromValue"]');
  }

  get inputFieldTo() {
    return $('[name="toValue"]');
  }

  get counter() {
    return $('.number');
  }

  get appHeader() {
    return $('.App-header');
  }

  get incrementBtn() {
    return $('.IncrementButton');
  }

  get fullArray() {
    return $$('.IncrementButton').map(el => el.getText());
  }

  get incrementArray() {
    return this.fullArray.filter(el => el > 0);
  }

  get decrementArray() {
    return this.fullArray.filter(el => el < 0);
  }

  get errorMsg() {
    return $('.errorMessage');
  }

  open() {
    browser.url('https://pachkovska.github.io/simple-counter/');
  }

  countButtons() {
    return $$('.IncrementButton').length;
  }

  checkElementsArePresent() {
    expect(this.appHeader.isDisplayed()).true;
    expect(this.counter.isDisplayed()).true;
    expect(this.inputFieldFrom.isDisplayed()).true;
    expect(this.inputFieldTo.isDisplayed()).true;
  }

  clickButton(text) {
    $(`//button[text()="${text}"]`).click();
  }

  countSumUpTo(n) {
    return ((1 + n) * n) / 2 + '';
  }
}

export default new AppPage();
