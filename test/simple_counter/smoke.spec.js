import AppPage from './AppPage';

before(() => {
  AppPage.open();
});

describe('verify basic functionality', () => {
  it('should verify elements are present', () => {
    AppPage.checkElementsArePresent();
  });

  it('should verify right amount of incremental buttons appear', () => {
    AppPage.inputFieldFrom.setValue(1);
    AppPage.inputFieldTo.setValue(5);
    expect(AppPage.countButtons()).eq(10);
  });

  it('should verify counter incremented by right amount', () => {
    AppPage.incrementArray.forEach(el => AppPage.clickButton(el));
    expect(AppPage.counter.getText()).eq(AppPage.countSumUpTo(5));
  });

  it('should verify counter decremented by right amount', () => {
    AppPage.decrementArray.forEach(el => AppPage.clickButton(el));
    expect(AppPage.counter.getText()).eq('0');
    
  });

  it('should verify error displayed when input IF1 value is bigger than IF2 value', () => {
    AppPage.inputFieldFrom.setValue('6');
    expect(AppPage.errorMsg.isDisplayed()).true;
  });

  it('should verify alert pops up when input non-integer or value below 1/ above 2', () => {
    AppPage.inputFieldFrom.setValue('wrong');
    expect(browser.isAlertOpen()).true;
    browser.acceptAlert();
    AppPage.inputFieldFrom.setValue(40);
    expect(browser.isAlertOpen()).true;
    browser.acceptAlert();
    AppPage.inputFieldFrom.setValue(999.444);
    expect(browser.isAlertOpen()).true;
    browser.acceptAlert();
  });
});
