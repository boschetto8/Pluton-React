import {Card, Image} from 'semantic-ui-react'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Button} from 'react-bootstrap'


const ItemDetail = ({data}) => {
    return(        
                <Card >
                        <Image src={data.imagen} wrapped ui={false} />
                         <Card.Content>
                                <Card.Header><h3>Nombre del libro:{data.nombre}</h3></Card.Header>
                                <Card.Meta>
                                <h4> Autor : {data.autor}</h4>
                                </Card.Meta>
                                 <Card.Description><h4>Descripción: {data.descripcion}</h4></Card.Description>
                        </Card.Content>
                        <ItemCount stockLibro={data.stock}/>
                         <Card.Content extra><h5>${data.precio}</h5></Card.Content>
                        <Button >Comprar</Button>
                </Card>
        
    ) 
            }
            

export default ItemDetail
