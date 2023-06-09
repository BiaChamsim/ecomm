use("ecomm");

db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            "title": "user-orders-schema",
            "bsonType": "object",
            "required": ["dataPedido", "account", "enderecoEntrega", "itens"],
            "additionalProperties": false,
            "properties":{
                "_id": {
                    "description": "category identifier",
                    "bsonType": "objectId"
                },
                "dataPedido": {
                    "description": "date the order was generated",
                    "bsonType": "date"
                },
                "account": {
                    "bsonType": "object",
                    "required": ["accountId", "nomeCliente"],
                    "additionalProperties": false,
                    "properties": {
                        "accountId": {
                            "description": "must be a valid accountId",
                            "bsonType": "objectId"
                        },
                        "nomeCliente": {
                            "description": "must be a valid name",
                            "bsonType": "string"
                        }
                    }
                },
                "enderecoEntrega": {
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
                            "description": "must be a string of at least 1 characters",
                            "bsonType": "string",
                            "minLength": 1
                        },
                        "complemento":{
                            "description": "must be a string",
                            "bsonType": "string"
                        },
                        "CEP": {
                            "description": "must be a string of exactly 8 characters",
                            "bsonType": "string",
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
                            "pattern": "^[A-Z]{2}$"
                        }
                    }
                },
                "itens": {
                    "bsonType": "array",
                    "minItems": 1,
                    "items": {
                        "bsonType": "object",
                        "required": ["productId", "quantidade", "precoUnitario"],
                        "additionalProperties": false,
                        "properties": {
                            "productId": {
                                "bsonType": "objectId",
                                "description": "must be a valid productId"
                            },
                            "quantidade": {
                                "bsonType": "int",
                                "minimum": 1,
                                "description": "Must be an integer greater than or equal to 1 and is required",
                              },
                              "desconto": {
                                "bsonType": "number",
                                "minimum": 0,
                                "exclusiveMinimum": true,
                                "description": "Must be a number greater than 0",
                              },
                              "precoUnitario": {
                                "bsonType": "number",
                                "minimum": 0,
                                "exclusiveMinimum": true,
                                "description": "Must be a number greater than 0 and is required",
                              },
                        }
                    }
                }

            }
        }
    }
})