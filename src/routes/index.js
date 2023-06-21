import express from "express";
import categoriesRouter from "./categoriesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "testando"})
    })

    app.use(
        express.json(),
        categoriesRouter
    )
}

export default routes;