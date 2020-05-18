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
    AppPage.inputFieldTo.setValue(3);
    expect(AppPage.countButtons()).eq(6);
  });

  it('should verify counter incremented by right amount', () => {
    AppPage.clickButton('1');
    AppPage.clickButton('2');
    AppPage.clickButton('3');
    expect(AppPage.counter.getText()).eq('6');
  });

  it('should verify counter decremented by right amount', () => {
    AppPage.clickButton('-1');
    AppPage.clickButton('-2');
    AppPage.clickButton('-3');
    expect(AppPage.counter.getText()).eq('0');
  });

  it('should verify error displayed when input IF1 value is bigger than IF2 value', () => {
    AppPage.inputFieldFrom.setValue('4');
    expect(AppPage.errorMsg.isDisplayed()).true;
  });
});
