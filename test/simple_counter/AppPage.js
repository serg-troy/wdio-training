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
}

export default new AppPage();
