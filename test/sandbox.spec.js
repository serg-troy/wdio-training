import SandPage from './SandPage';

describe('SANDBOX', () => {
  it('should pass', () => {
    browser.url('https://stage.localcoding.us/user/register');
    $('#user_login_firstName').setValue('Test');
    $('#user_login_lastName').setValue('Test');
    $('#user_login_email').setValue(Math.random() + '@mail.com');
    $('#user_login_password').setValue('123455');
    $('#user_login_agreement').click();
    $('button[type="submit"]').waitForClickable();
    $('button[type="submit"]').click();
    browser.pause(150);
  });

  it('should ', function () {
    $('.ant-select-selection-item').click();
    browser.pause(1500);
    $$('.ant-select-item-option-content')[5].click();
    browser.pause(3000);
  });
});
