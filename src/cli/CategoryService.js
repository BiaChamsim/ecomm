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

    static async createCategory(){
        //parametros read file: 
        //1: caminho do arquivo
        //2: encoding (utf-8)
        //3: arrow function resultado do readfile

        fs.readFile(newCategory, encoding, (error, category)=>{
            console.log(category)
        })
    }
}


export default CategoryService;