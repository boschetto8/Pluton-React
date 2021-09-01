import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Boton = () => {

const agregarCarrito = ({count}) => {
    



    
}
    return (
        <div>
             <NavLink to='/cart'>
                 <Button primary onClick={agregarCarrito}>Comprar</Button>
            </NavLink>
        </div>
    )
}

export default Boton
