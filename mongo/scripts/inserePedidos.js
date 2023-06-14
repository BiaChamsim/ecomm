use("ecomm");

let criationDate = new Date(); 

db.orders.insertMany([
    {
        "dataPedido": criationDate,
        "account": {
            "accountId": ObjectId('6480e9cccb6dcf7e56f1ed00'),
            "nomeCliente": "Veronica"
        }, 
        "enderecoEntrega": {
            "bairro": "Centro",
            "rua": "Rua Antônio Amâncio Pires",
            "numero": "201",
            "CEP": "58823970",
            "cidade": "Aparecida",
            "UF": "PB"
        },
        "itens": [
            {
                "productId": ObjectId('647e6674b83dd95faef6ef71'),
                "quantidade": 1,
                "precoUnitario": 3523.00
            }
        ]
        
    },
    {
        "dataPedido": criationDate,
        "account": {
            "accountId": ObjectId('6480e9cccb6dcf7e56f1ed02'),
            "nomeCliente": "Laura"
        }, 
        "enderecoEntrega": {
            "bairro": "Jardim Belval",
            "rua": "Rua Vera Cruz",
            "complemento": "casa 5",
            "numero": "268",
            "CEP": "06423010",
            "cidade": "Barueri",
            "UF": "SP"
        },
        "itens": [
            {
                "productId": ObjectId('647e6674b83dd95faef6ef73'),
                "quantidade": 1,
                "precoUnitario": 102.9
            }
        ]
        
    }
])