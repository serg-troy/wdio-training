describe('SANDBOX', () => {
  it('should pass', () => {
    browser.url('https://reg.usps.com/entreg/RegistrationAction_input');
    browser.pause(2000)
    $('#slanguage').selectByIndex(1);
    browser.pause(4000)
    $('#slanguage').selectByIndex(0);
    browser.waitUntil(() => $('#slanguage').getText() === "English")
  });
});
