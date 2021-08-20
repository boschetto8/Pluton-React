import React from 'react'
import './ShoppingCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShoppingCart = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className='carrito'/>
        </div>
    )
}

export default ShoppingCart
