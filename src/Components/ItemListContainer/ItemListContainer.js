import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import imgLibro from './LibroContainer.png'


const ItemListContainer = ({welcome}) => {

    

    return (
        <>
            <div className='contenedor'>
                <div className='bienvenido'>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                    <h1>{welcome}</h1>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                </div>
                </div>
                <div className='itemList'>
                    
                    <ItemList/>
                </div>
            
        </>
        
    )
}

export default ItemListContainer
