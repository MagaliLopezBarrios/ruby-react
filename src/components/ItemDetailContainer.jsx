import React from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const productos = [
    {id:1, nombre:"Cuadro 1", precio: "7000 $", src: "", descripcion: "Cuadro Personalizado 35 x 20cm", stock:15, category:"cuadro"},
    {id:2, nombre:"Cuadro 2", precio: "8000 $", src: "", descripcion: "Cuadro Personalizado 40 x 30cm", stock:20, category:"cuadro"},
    {id:3, nombre:"Cuadro 3", precio: "9000 $", src: "", descripcion: "Cuadro Personalizado 50 x 40cm", stock:12, category:"cuadro"},
    {id:4, nombre:"Cuadro 4", precio: "10000 $", src: "", descripcion: "Cuadro Personalizado 50 x 60cm", stock:5, category:"cuadro"},
    {id:5, nombre:"Mural 1", precio: "40000 $", src: "", descripcion: "Mural Personalizado 2 x 2metros", stock:10, category:"mural"},
    {id:6, nombre:"Mural 2", precio: "50000 $", src: "", descripcion: "Mural Personalizado 2 x 3metros", stock:8, category:"mural"},
    {id:7, nombre:"Mural 3", precio: "60000 $", src: "", descripcion: "Mural Personalizado 3 x 3metros", stock:6, category:"mural"},
    {id:8, nombre:"Mural 4", precio: "70000 $", src: "", descripcion: "Mural Personalizado 4 x 4metros", stock:4, category:"mural"},
    {id:9, nombre:"Art on clothes 1", precio: "7000 $", src: "", descripcion: "Prenda Personalizada: short", stock:5, category:"clothes"},
    {id:10, nombre:"Art on clothes 2", precio: "7000 $", src: "", descripcion: "Prenda Personalizada: remera", stock:5, category:"clothes"},
    {id:11, nombre:"Art on clothes 3", precio: "7000 $", src: "", descripcion: "Prenda Personalizada: camisa", stock:5, category:"clothes"},
    {id:12, nombre:"Art on clothes 4", precio: "7000 $", src: "", descripcion: "Prenda Personalizada: campera", stock:5, category:"clothes"},



    ]
    
    const getProductos = new Promise ((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("No hay productos"))
        }
    })
    
    getProductos
        .then((res) => {

        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <>
            <ItemDetail
                productos={productos}
            />   
        </>
    )    
}

export default ItemDetailContainer