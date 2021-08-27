import React  from 'react';
import { Card,  Image } from 'semantic-ui-react'
import './Item.css';



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
                     
                     
            </Card>
            
      </div>
      
   
  );
}

export default Item