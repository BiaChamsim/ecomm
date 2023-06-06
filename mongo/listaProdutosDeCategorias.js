use("ecomm");

const produtosPorCategoria = db.products.find({$or: [{categoria: "LIVROS"}, {categoria: "CELULARES"}]});

console.log(produtosPorCategoria);