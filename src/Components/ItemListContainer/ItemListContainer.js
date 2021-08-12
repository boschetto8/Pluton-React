import React from 'react';
import './ItemListContainer.css';
import imgLibro from './LibroContainer.png'

const ItemListContainer = ({welcome}) => {
    return (
        <div className='contenedor'>
            <img src={imgLibro} alt='libro-contenedor' width='160px'/>
            <h1>{welcome}</h1>
            <img src={imgLibro} alt='libro-contenedor' width='160px'/>
        </div>
    )
}

export default ItemListContainer
