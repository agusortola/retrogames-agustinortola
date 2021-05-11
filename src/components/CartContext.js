import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()



export const CartProvider = ({children}) => {

    //estado global del carrito, el children no lo modifica!
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
    const addToCart = (item) => {
        setCart([...cart, item])
    }
    
    //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.id != itemId)
        setCart(newCart)
    }

    //Re-renderea cada vez que se modifica el largo o tamaño de cart.
    useEffect(()=>{
        setQuantity(cart.length)
        console.log(cart)
    },[cart])
    

    return(
        <CartContext.Provider value={{cart, quantity, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
