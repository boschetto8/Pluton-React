import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
	console.log(data)
    return (
		<div className='cardInfo'>
			<Card>
				<Image src={data.imagen} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{data.nombre}</Card.Header>
					<Card.Meta>
						<span>{data.autor}</span>
					</Card.Meta>
					<Card.Description>Sinopsis: {data.descripcion}</Card.Description>
					<Card.Description>Precio: ${data.precio}</Card.Description>
				</Card.Content>
			</Card>
			<ItemCount data={data.stock}/>
			
			
		</div>
    )
}

export default ItemDetail
