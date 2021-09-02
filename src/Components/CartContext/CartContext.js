/*import React,{ useContext, useState, createContext } from "react";

export const CartContext = createContext();

export const UseCartContext = useContext(CartContext);

export const cartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
 
 const idInCart = (id) => {cart.some((item) => item.id ===id)}

 const addToCart = (item, quantity) => {
    

    
 }
 
 const deleteItem = (itemId) => {
     setCart (cart.filter((el => el.item.id !== itemId)))
 }

 ;
 const clearCart = () => setCart([])

return (
        <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart}}>
            {children}            
        </cartContext.Provider>
    )
}
*/
