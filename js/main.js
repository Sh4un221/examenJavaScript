import {
    getAllAbrigo,
    getAllCamisetas,
    getAllPantalones
} from "./services/dataPage.js"
import{ 
    todosLosProductos,
    Abrigos,
    Camisetas,
    Pantalones,
    clickInicio

 }from "./modules/dataLogic.js"

console.log(await getAllCamisetas());
console.log(await getAllAbrigo());
console.log(await getAllPantalones());
await todosLosProductos()
clickInicio()
await Abrigos()
await Camisetas()
await Pantalones()
