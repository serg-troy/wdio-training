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
    for (let i = 1; i < 6; i++){
      AppPage.clickButton(`${i}`);
    }
    expect(AppPage.counter.getText()).eq(AppPage.countSumUpTo(5));
  });

  it('should verify counter decremented by right amount', () => {
    for (let i = 5; i > 0; i--){
      AppPage.clickButton(`${-i}`);
    }
    expect(AppPage.counter.getText()).eq('0');
  });

  it('should verify error displayed when input IF1 value is bigger than IF2 value', () => {
    AppPage.inputFieldFrom.setValue('6');
    expect(AppPage.errorMsg.isDisplayed()).true;
  });
});
