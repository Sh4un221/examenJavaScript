import {
    getAllAbrigo,
    getAllCamisetas,
    getAllPantalones
} from "../services/dataPage.js"
let contenedorProductos = document.querySelector("#cards__container")


export const todosLosProductos = async () => {
    let abrigos = await getAllAbrigo()
    contenedorProductos.innerHTML = ""
    let i = 1;
    let j = 1;
    let k = 1;
    abrigos.forEach(abrigo => {
        let p = document.createElement("p");
        let div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML += `
            <div class="card">
                    <img src=${abrigo.imagen} alt="${abrigo.nombre}">
                    <div class="content__card">
                        <p>Abrigo 0${i}</p>
                        <div class="purchase">
                            <p class="price">${abrigo.precio}$</p>
                            <button>Agregar</button>
                        </div>
                    </div>
                </div>
        `
        i++
        contenedorProductos.appendChild(div, p)

    });
    let camisetas = await getAllCamisetas()
    camisetas.forEach(camiseta => {
        let p = document.createElement("p");
        let div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML += `
                    <img src=${camiseta.imagen} alt="${camiseta.nombre}">
                    <div class="content__card">
                        <p>Camiseta 0${j}</p>
                        <div class="purchase">
                            <p class="price">${camiseta.precio}$</p>
                            <button>Agregar</button>
                        </div>
                    </div>
        `
        j++
        contenedorProductos.appendChild(div, p)

    });
    let pantalones = await getAllPantalones()
    pantalones.forEach(pantalon => {
        let p = document.createElement("p");
        let div = document.createElement("div")
        div.classList.add("card")


        div.innerHTML += `
                    <img src=${pantalon.imagen} alt="${pantalon.nombre}">
                    <div class="content__card">
                        <p>Pantalon 0${k}</p>
                        <div class="purchase">
                            <p class="price">${pantalon.precio}$</p>
                            <button>Agregar</button>
                        </div>
                    </div>
        `
        k++
        contenedorProductos.appendChild(div, p)
    });
}
export const Abrigos = async () => {
    let botonAbrigos = document.querySelector("#abrigos")

    let abrigos = await getAllAbrigo()
    botonAbrigos.addEventListener(click, () => {
        contenedorProductos.innerHTML = ""
        let i = 1;
        abrigos.forEach(abrigo => {
            let p = document.createElement("p");
            let div = document.createElement("div")
            div.classList.add("card")

            div.innerHTML += `
            <div class="card">
                    <img src=${abrigo.imagen} alt="${abrigo.nombre}">
                    <div class="content__card">
                        <p>Abrigo 0${i}</p>
                        <div class="purchase">
                            <p class="price">${abrigo.precio}$</p>
                            <button>Agregar</button>
                        </div>
                    </div>
                </div>
        `
            i++
            contenedorProductos.appendChild(div, p)
        });
    })


}

