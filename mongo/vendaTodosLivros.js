use("ecomm");

const vendaTodosOsLivros = db.products.updateMany({categoria: "LIVROS"}, {$set: {estoque: 0}});

console.log(vendaTodosOsLivros);