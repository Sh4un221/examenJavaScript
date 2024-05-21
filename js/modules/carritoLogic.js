let numero=document.querySelector("#numero")
let botonVaciar=document.querySelector("#empty__car")
let productos=document.querySelector("#purchases__container")
let total=document.querySelector("#total")

 const vaciarCarro=async()=>{
    console.log(botonVaciar);
    botonVaciar.addEventListener("click",()=>{
        productos.innerHTML=""
        numero.innerText="0"
        total.innerText="0"   
    })
}
await vaciarCarro()