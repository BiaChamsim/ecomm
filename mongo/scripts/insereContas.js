use("ecomm");

let criationDate = new Date(); 

db.accounts.insertMany([
    {
        "nome": "Veronica",
        "email": "veronica@email.com",
        "senha": "alura",
        "data_criacao": criationDate,
        "CPF": "90710550006",
        "telefone": "1234567891",
        "endereco": {
            "bairro": "Centro",
            "rua": "Rua Antônio Amâncio Pires",
            "numero": "201",
            "CEP": "58823970",
            "cidade": "Aparecida",
            "UF": "PB"
        }
    },{
        "nome": "Antonio",
        "email": "antonio@email.com",
        "senha": "pagonxt",
        "data_criacao": criationDate,
        "CPF": "91075421004",
        "telefone": "1234567892",
        "endereco": {
            "bairro": "Batelão da Barra",
            "rua": "Avenida Gabriel Paes",
            "numero": "558",
            "CEP": "28245970",
            "cidade": "Itabapoana",
            "UF": "RJ"
        }
    },{
        "nome": "Laura",
        "email": "laura@email.com",
        "senha": "getnet",
        "data_criacao": criationDate,
        "CPF": "48891361003",
        "telefone": "1234567893",
        "endereco": {
            "bairro": "Jardim Belval",
            "rua": "Rua Vera Cruz",
            "complemento": "casa 5",
            "numero": "268",
            "CEP": "06423010",
            "cidade": "Barueri",
            "UF": "SP"
        }
    }
    

])