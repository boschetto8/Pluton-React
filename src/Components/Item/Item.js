import React  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Card,  Image } from 'semantic-ui-react'
import './Item.css';
import {Button} from 'react-bootstrap'



const Item = ({libro}) => {
  console.log(libro)

  return (
     <div className='cardView'>
            <Card>
                  <Image src={libro.imagen} />
                  <Card.Content>
                     <Card.Header>{libro.nombre}</Card.Header>                     
                  </Card.Content>
                     <Card.Content extra><h5>${libro.precio}</h5></Card.Content>
                     <h5><ItemCount stockLibro={libro.stock}/></h5>
                     <Button primary>Comprar</Button>
            </Card>
            
      </div>
      
   
  );
}

export default Item