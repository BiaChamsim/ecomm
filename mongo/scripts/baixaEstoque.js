use("ecomm");

db.products.updateOne(
    {nome: "Galaxy Tab S8"}, 
    {$inc: {estoque: -2}}
);

