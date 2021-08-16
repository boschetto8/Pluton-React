import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import imgLibro from './LibroContainer.png'

const ItemListContainer = ({welcome}) => {
    return (
     
            <div className='contenedor'>
                <div className='bienvenido'>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                    <h1>{welcome}</h1>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                </div>
                <div className='contador'>
                    <ItemCount />
                </div>
            </div>
        
    )
}

export default ItemListContainer
