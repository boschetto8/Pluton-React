import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons'
import './Widget.css'


 export const CartWidget = () => {
    return (
        <div className='icons'>
            <FontAwesomeIcon icon= {faShoppingCart} />
        </div>
    )
}

export const BookWidget = () => {
    return (
        <div className='icons'>
            <FontAwesomeIcon icon= {faBook} />
        </div>
    )
}


