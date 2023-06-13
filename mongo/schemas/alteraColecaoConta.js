use("ecomm");

db.runCommand({collMod:"accounts", validator: 
    {
        $jsonSchema: {
            "title": "user-account-schema",
            "bsonType": "object",
            "required": ["nome", "email", "senha", "data_criacao", "CPF", "telefone", "endereco"],
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "description": "category identifier",
                    "bsonType": "objectId"
                },
                "nome": {
                    "description": "must be a string of at least 5 characters",
                    "bsonType": "string",
                    "minLength": 5
                },
                "email": {
                    "description": "must be a string of at least 5 characters",
                    "bsonType": "string",
                    "pattern": "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$",
                    "minLength": 5
                },
                "senha": {
                    "description": "must be a string of at least 5 characters",
                    "bsonType": "string",
                    "minLength": 5
                },
                "data_criacao": {
                    "description" : "account creation date",
                    "bsonType": "date"
                },
                "CPF": {
                    "description": "must be a string of exactly 11 characters",
                    "bsonType": "string",
                    "pattern": "^[0-9]{11}$"
                },
                "telefone": {
                    "description": "must be a string of at least 10 characters",
                    "bsonType": "number",
                    "minLength": 10
                },
                "endereco": {
                    "title": "users-adress",
                    "bsonType": "object",
                    "required": ["bairro", "rua", "numero", "CEP", "cidade", "UF"],
                    "additionalProperties": false,
                    "properties": {
                        "bairro": {
                            "description": "must be a string of at least 1 characters",
                            "bsonType": "string",
                            "minLength": 1
                        },
                        "rua": {
                            "description": "must be a string of at least 1 characters",
                            "bsonType": "string",
                            "minLength": 1
                        },
                        "numero": {
                            "bsonType": ["number","string"],
                            "pattern": "^d{1}|[S/N]",
                            "description": "must be a string of at least 1 characters",
                        },
                        "complemento":{
                            "description": "must be a string",
                            "bsonType": "string"
                        },
                        "CEP": {
                            "description": "must be a string of exactly 8 characters",
                            "bsonType": "number",
                            "pattern": "^[0-9]{8}$"
                        },
                        "cidade": {
                            "description": "must be a string of at least 5 characters",
                            "bsonType": "string",
                            "minLength": 5
                        },
                        "UF": {
                            "description": "must be a string of exactly 2 characters",
                            "bsonType": "string",
                            "pattern": "^[A-Z]{2}$",
                            "enum": ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO']
                        }
                    }
                    
                }
            }
        }
    }

})
