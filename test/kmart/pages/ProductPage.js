import Base from './Base';

class ProductPage extends Base {
  get addToCartBtn() {
    return $('[data-id="addToCart"]')
  }
}

export default new ProductPage;