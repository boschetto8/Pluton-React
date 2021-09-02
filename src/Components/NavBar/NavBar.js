import React from 'react'
import { NavLink } from 'react-router-dom'
import { BookWidget, CartWidget } from '../Widget/Widget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navCont'>
            <div className='navegacion'>
                
                    <NavLink to='/' className='itemNavegacion'>
                        <div className='logo'>
                        
                        <h3 className='textLibreria'><BookWidget className='bookWidget'/> Librería Plutón</h3>        
                                          
                        </div>               
                    </NavLink>
                    <NavLink to='/' className='itemNavegacion'><h4>Inicio</h4></NavLink>
                    <NavLink to='/contact' className='itemNavegacion'><h4>Contacto</h4></NavLink>                    
                    <NavLink to='/about' className='itemNavegacion'><h4>Nosotros</h4></NavLink>
                
            </div>
            <div className='carrito'>
                    <NavLink to='/cart'><CartWidget/> </NavLink>
            </div>       
            
            
                     
        </div>
    )
}

export default NavBar