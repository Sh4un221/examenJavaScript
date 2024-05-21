import {
    getAllAbrigo,
    getAllCamisetas,
    getAllPantalones
} from "../services/dataPage.js"
let contenedorProductos = document.querySelector("#cards__container")
let botonTodosLosProductos = document.querySelector("#todos")
let botonAbrigos = document.querySelector("#abrigos")
let botonCamisetas = document.querySelector("#camisetas")
let botonPantalones = document.querySelector("#pantalones")

botonTodosLosProductos.classList.remove("all__selector")
botonAbrigos.classList.remove("all__selector")
botonCamisetas.classList.remove("all__selector")
botonPantalones.classList.remove("all__selector")


export const todosLosProductos = async () => {
    let botonTodosLosProductos = document.querySelector("#todos")
    let abrigos = await getAllAbrigo()
    let pantalones = await getAllPantalones()
    let camisetas = await getAllCamisetas()
    botonTodosLosProductos.addEventListener("click", () => {
        botonTodosLosProductos.classList.add("all__selector")
        botonAbrigos.classList.remove("all__selector")
        botonCamisetas.classList.remove("all__selector")
        botonPantalones.classList.remove("all__selector")
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
    })


}
export const Abrigos = async () => {
    let botonAbrigos = document.querySelector("#abrigos")

    let abrigos = await getAllAbrigo()
    botonAbrigos.addEventListener("click", () => {
        botonAbrigos.classList.add("all__selector")
        botonTodosLosProductos.classList.remove("all__selector")
        botonCamisetas.classList.remove("all__selector")
        botonPantalones.classList.remove("all__selector")
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

export const Camisetas = async () => {
    let botonCamisetas = document.querySelector("#camisetas")

    let camisetas = await getAllCamisetas()
    botonCamisetas.addEventListener("click", () => {
        botonTodosLosProductos.classList.remove("all__selector")
        botonAbrigos.classList.remove("all__selector")
        botonPantalones.classList.remove("all__selector")
        botonCamisetas.classList.add("all__selector")
        contenedorProductos.innerHTML = ""
        let i = 1;
        camisetas.forEach(camiseta => {
            let p = document.createElement("p");
            let div = document.createElement("div")
            div.classList.add("card")

            div.innerHTML += `
            <div class="card">
                    <img src=${camiseta.imagen} alt="${camiseta.nombre}">
                    <div class="content__card">
                        <p>Camiseta 0${i}</p>
                        <div class="purchase">
                            <p class="price">${camiseta.precio}$</p>
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

export const Pantalones = async () => {
    let botonPantalones = document.querySelector("#pantalones")

    let pantalones = await getAllPantalones()
    botonPantalones.addEventListener("click", () => {
        botonTodosLosProductos.classList.remove("all__selector")
        botonAbrigos.classList.remove("all__selector")
        botonCamisetas.classList.remove("all__selector")
        botonPantalones.classList.add("all__selector")

        contenedorProductos.innerHTML = ""
        let i = 1;
        pantalones.forEach(pantalon => {
            let p = document.createElement("p");
            let div = document.createElement("div")
            div.classList.add("card")

            div.innerHTML += `
            <div class="card">
                    <img src=${pantalon.imagen} alt="${pantalon.nombre}">
                    <div class="content__card">
                        <p>Camiseta 0${i}</p>
                        <div class="purchase">
                            <p class="price">${pantalon.precio}$</p>
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