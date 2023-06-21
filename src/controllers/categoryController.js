import categories from "../models/category.js";

class categoryController{
    static findCategories = async (req, res) => {
        try{
            const categoriesResult = await categories.find();
            res.status(200).json(categoriesResult)
        }catch(err){
            res.status(500).json(err);
        }

    }

    static insertCategory = async (req, res) => {
        try{
            const category = new categories(req.body);
            await category.save();
            res.status(201).json(category);
            
        }catch(err){
            res.status(400).send({errorMessage: err.message});
        }
    }

    static findCategoryById = async (req, res) => {
        try{
            let id = req.params.id;
            const categoryById = await categories.findById(id);
            res.status(200).json(categoryById);


        }catch(err){
            res.status(404).send('Nenhuma categoria encontrada');
        }
    }
}

export default categoryController;