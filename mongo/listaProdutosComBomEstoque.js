use("ecomm");

const produtosComBomEstoque = db.products.find(
    { estoque: {$gte: 3} },
    { nome: 1, estoque: 1, id: 1}
)

console.log(produtosComBomEstoque);