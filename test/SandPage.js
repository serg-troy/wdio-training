class SandPage {
  get searchItems(){
    $$('[data-cel-widget*="search_result"]');
  }

  clickSearchItem(n){
    $(`[data-cel-widget="search_result_${n}"]`).waitForClickable();
    $(`[data-cel-widget="search_result_${n}"]`).click();
  }


}

export default new SandPage();