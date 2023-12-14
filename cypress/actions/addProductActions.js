class addProduct {
  //foi criado um constructor para que o valor e quantidade aleatórias possam ser reutilizados em outras validações
  constructor() {
    this.randomQuantity = Cypress._.random(1, 100); //bibilioteca javascript que adiciona número aleatório de 1 a 100 no campo de quantidade
    this.randomValue = (Cypress._.random(100, 1000) / 100) //bibilioteca javascript que adiciona número aleatório de 100 a 1000 no campo de valor
      .toFixed(2) //toFixed foi usado para garantir que o número tenha 2 casas decimais
      .replace(".", ","); //replace foi usado para garantir que os . sejam substituídos por ,
  } //essa validação foi necessária, pois no momento em que o valor era validado no carrinho, não era considerado um valor decimal

  //acessa a homepage da VR
  visitVrHome() {
    cy.visit("https://www.vr.com.br/");
  }
  //clica no botão "Compra online"
  clickProductButton() {
    cy.get("button[id=buttonCompreOnline]").click({ force: true });
  }
  //esse método foi criado devido a necessidade de validar as informações da página loja, pois ao clicar no botão "Compra online", o link a página é aberta em uma nova guia do chrome
  visitProductsHome() {
    cy.visit("https://loja.vr.com.br/");
  }
  //clica o produto "Cartões VR"
  clickVrButton() {
    cy.get("button[id=btn-selecionar-modalidade-avulso]").click({
      force: true,
    });
  }
  //adiciona quantidade do produto
  addAmount() {
    cy.get("input[id=produto-auto-quantidade]").type(this.randomQuantity);
  }
  //adiciona valor do produto
  addValue() {
    cy.get("input[id=produto-auto-valor]").type(this.randomValue);
  }
  //adiciona produto no carrinho
  clickAddbutton() {
    cy.get("[id=btn-adicionar-carrinho-auto]").click({ force: true });
    cy.contains("p", "Produto adicionado!");
  }
  //clica no carrinho na parte superior da página
  clickCar() {
    cy.get("button[id=btn-meu-carrinho]").click({ force: true });
  }
  //valida quantidade e valor no carrinho
  validateCardProducts() {
    cy.get("div[class=product-information__value]").contains(this.randomValue);
    cy.get("div[class=product-information__amount]").contains(
      this.randomQuantity
    );
  }
}

export default new addProduct();
