import CategoryService from "./CategoryService.js";

const comandos = process.argv; 

async function processarComando(command){

    switch(command[2]){

        case "--listarCategorias": 
            await CategoryService.findCategories();
            break;
        
        case "--recuperarCategoriaPorId":
            let id = comandos[3];
            await CategoryService.findCategoryById(id);
            break;
        case "--inserirCategoria":
            await CategoryService.createCategory(newCategory)
            break
        
        default:
            console.log(`${command[2]} não encontrado`)

    }
};


await processarComando(comandos);