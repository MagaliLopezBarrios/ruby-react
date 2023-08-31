import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const Document = () => {
    const [product, setProduct] = useState ([])
    console.log (product)


    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "PRODUCTOS", "0BqtSaj3h9SooxBbwcBC")
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }

        })
        
    }, [] )




  return (
    <div>
        <h1>Productos</h1>
        {
            <div>
                <h3>Producto: {product.name}</h3>
                <h4>Categoria: {product,category}</h4>
                <p>Precio: {product.precio}</p>
            </div>
        }
    </div>
  )
}

export default Document