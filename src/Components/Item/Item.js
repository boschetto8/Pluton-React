import React  from 'react';
import { Card,  Image } from 'semantic-ui-react'
import './Item.css';



const Item = ({libro}) => {
  console.log(libro)

  return (
        <div className='separador'>
            <Card  className='cardView'>
                  <Image src={libro.imagen} className='imagenPortada'/>
                  <Card.Content>
                     <Card.Header>{libro.nombre}</Card.Header>                     
                  </Card.Content>
                     <Card.Content extra><h5><strong>${libro.precio}</strong></h5></Card.Content>
                     
                     
            </Card>
            
      </div>
      
   
  );
}

export default Item