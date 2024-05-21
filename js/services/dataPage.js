export const getAllAbrigo=async()=>{
let res=await fetch('http://172.16.101.146:5999/abrigo')
let data=await res.json()
return data
}
export const getAllCamisetas=async()=>{
    let res=await fetch('http://172.16.101.146:5999/camiseta')
    let data=await res.json()
    return data
    }
export const getAllPantalones=async()=>{
    let res=await fetch('http://172.16.101.146:5999/pantalon')
    let data=await res.json()
    return data
}
