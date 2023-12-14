import addProduct from "../actions/addProductActions";

describe("Acess VR Home Page", () => {
  before(() => {
    addProduct.visitVrHome();
  });

  it("Validade if the products were added to the shop car", () => {
    addProduct.clickProductButton();
    addProduct.visitProductsHome();
    addProduct.clickVrButton();
    addProduct.addAmount();
    addProduct.addValue();
    addProduct.clickAddbutton();
    addProduct.clickCar();
    addProduct.validateCardProducts();
  });
});
