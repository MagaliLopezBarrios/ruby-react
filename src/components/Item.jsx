import React from "react"
import { Button, Flex, Card, Divider, Stack, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Item = ({id, nombre, precio, descripcion, imagen, category}) => {

    console.log(id)


    return (

        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={imagen}
                    alt='Producto ilustrativo'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>
                        {descripcion}
                    </Text>
                    <Text>
                        {category}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {precio}
                    </Text>
                </Stack>
            <Flex>
                <Link to= {'/item/${id}'} />
            </Flex>   
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Comprar
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Agragar al carrito
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

        
    )
}

export default Item