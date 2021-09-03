import React, {  useState, useContext, createContext } from "react";


export const CartContext = createContext();


export const UseCartContext = () =>  useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
 
 const idInCart = (id) => {cart.some((book) => book.id ===id)}

 const addToCart = (item, quantity) => { 
     if (idInCart(item)){
         const newCart = cart.map((element) => {
             if(element.id === item.id){
                 return {...element, quantity: element.quantity + quantity }
             }else return element
         })
         setCart(newCart)     }
     else {
         setCart((prev) => [...prev, {...item, quantity}])
     }
     
 }


 
 const deleteItem = (itemId) => {
     setCart (cart.filter((el => el.item.id !== itemId)))
 }

 ;
 const clearCart = () => setCart([])

return (
        <CartContext.Provider value={{ cart, addToCart, deleteItem, clearCart}}>
            {children}            
        </CartContext.Provider>
    )
}

