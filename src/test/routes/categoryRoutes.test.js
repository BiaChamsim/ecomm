import app from "../../app.js";
import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import request from "supertest";

let server;

let categoryId;

beforeEach( () => {
    const port = 3000;
    server = app.listen(port);
});

afterEach( () => {
    server.close();
});


describe('GET em /categories', () => {
    it('Deve retornar a lista de categorias', async () => {
        const response = await request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
        
        expect(response.body[0]).toHaveProperty('nome');
    });
});

describe('POST em /categories', () => {
    it('Deve adcionar uma nova categoria', async () => {
        const response = await request(app)
        .post('/categories')
        .send({
            nome: 'ELETRONICOS',
            status: 'ATIVA',
        })
        .expect(201)

        categoryId = response.body._id;
    });

    it('Categoria não deve ser criada caso o body esteja vazio', async () => {
        await request(app)
            .post('/categories')
            .send({})
            .expect(400)
    });

    it('Categoria não deve ser criada caso o nome contenha menos de 3 caracteres', async () => {
        await request(app)
            .post('/categories')
            .send({
                nome: 'a',
                status: "ATIVA"
            })
            .expect(400)
    });

    it('Categoria não deve ser criada caso o campo nome comece com números', async () => {
        await request(app)
            .post('/categories')
            .send({
                nome: '1ab',
                status: "ATIVA"
            })
            .expect(400)
    });
});

describe('GET em /categories/id', () => {
    it('Deve retornar a mesma categoria passada no id', async () => {
      await request(app)
        .get(`/categories/${categoryId}`)
        .expect(200);
    });
  });
