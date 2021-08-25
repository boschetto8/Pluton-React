import React from 'react'
import imgLibro from './LibroHeader.png'
import './Header.css'

const Header = ({welcome}) => {
    return (
        
            <div className='contenedor'>
                <div className='bienvenido'>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                    <h1>{welcome}</h1>
                    <img src={imgLibro} alt='libro-contenedor' width='160px'/>
                </div>
                </div>
        
    )
}

export default Header
