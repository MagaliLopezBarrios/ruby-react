import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collection = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "PRODUCTOS")
    getDocs(itemsCollection).then ((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProducts(docs)
    }) 


    }, [])


  return (
    <div>
        <h1>Productos</h1>
        {
            products.map((product) => (
                <div key={(product.nombre)}>
                    <h3>Producto: {product.nombre}</h3>
                    <h4>Categoria: {product.categoria}</h4>
                    <p>Precio: {product.precio}</p>


                </div>
            ))
        }
    </div>
  )
}

export default Collection