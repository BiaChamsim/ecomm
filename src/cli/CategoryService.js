import fs from 'fs';

class CategoryService{
    static async findCategories(){
       const categories = await fetch('http://localhost:3000/categories');
       
       console.log(`Response status: ${categories.status}`);
       console.log(await categories.json());
    }

    static async findCategoryById(id){
        const categoryById = await fetch(`http://localhost:3000/categories/${id}`);
        console.log(await categoryById.json())
    }

    static async createCategory(category){
        const encoding = "utf-8";
        const categoryBody = await fs.promises.readFile(category, encoding);

        const response = await fetch('http://localhost:3000/categories', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: categoryBody
        })
        console.log(`Response status: ${response.status}`, await response.json())
    }
    static async updateCategory(id, category){
        const encoding = "utf-8";
        const updateCategory = await fs.promises.readFile(category, encoding);

        const response = await fetch(`http://localhost:3000/categories/${id}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: updateCategory
        })
        console.log(`Response status: ${response.status},`, await response.json())

    }
    static async deleteCategory(id){

        const response = await fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE"
        })

        console.log(`Response status: ${response.status}`, await response.json())
    }
}


export default CategoryService;