import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';


const ItemDetail = ({ productos }) => {
    const { id } = useParams();


    const filteredProducts = productos.filter((producto) => producto.id == id)


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
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Center p='1rem'>

                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{p.nombre}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.description}</Text>
                                    <Text>{p.categoria}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                )
            })}
        </div>
    )
}


export default React.memo (ItemDetail);