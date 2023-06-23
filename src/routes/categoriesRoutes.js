import express from "express";
import categoryController from "../controllers/categoryController.js";

const categoriesRouter = express.Router();

categoriesRouter
    .get("/categories", categoryController.findCategories)
    .post("/categories", categoryController.insertCategory)
    .get("/categories/:id", categoryController.findCategoryById)

export default categoriesRouter;