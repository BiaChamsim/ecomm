import CategoryService from "./CategoryService.js";

const comandos = process.argv; 

async function processarComando(command){
    let id = comandos[3];
    switch(command[2]){
        case "--listarCategorias": 
            await CategoryService.findCategories();
            break;
        
        case "--recuperarCategoriaPorId":
            await CategoryService.findCategoryById(id);
            break;
        case "--inserirCategoria":
            await CategoryService.createCategory(command[3])
            console.log(command[3])
            break;
        case "--atualizarCategoria":
            await CategoryService.updateCategory(command[3], command[4])
            console.log(command[3])
            break;
        case "--excluirCategoria":
            await CategoryService.deleteCategory(id)
            break;
        
        default:
            console.log(`${command[2]} não encontrado`)
    }
};


await processarComando(comandos);