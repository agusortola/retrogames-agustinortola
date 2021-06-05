import { createContext, useEffect, useState } from "react";
import { getFireStore } from '../firebase';

export const CartContext = createContext()



export const CartProvider = ({children}) => {

    //estado global del carrito, el children no lo modifica!
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)

    //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
    const addToCart = (item, count) => {
        const index = cart.findIndex(i => i.item.id == item.id)
        if (index >= 0) {
            const itemInCart = cart[index]         
            itemInCart.quantity = itemInCart.quantity + count
            //updateCart es el carrito sin el item encontrado para agregarselo actualizado.
            const updatedCart = cart.filter((c, i) => i !== index)
            updatedCart.push(itemInCart) //agrego item actualizado.
            setCart(updatedCart)   //seteo carrito actualizado.
          
        } else {
            const newItem = {
                item: item,
                quantity: count
            }
            setCart([...cart, newItem]) 
        }
    }
    
    //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.item.id !== itemId)
        setCart(newCart)
    }

    //Borra todos los items del carrito.
    const clear = () => {
        setCart([])
        
    }

    const checkOut = (form) => {
        cart.length >=1? alert('Gracias por tu compra!') : alert('Primero añadí algún item :)')
        console.log(form, cart)
        const order = cart.map(item => {
            return {
                item: item.item.title,
                quantity: item.quantity
            }
        })
        addOrder(form, order)
    }

    const db = getFireStore()
    const addOrder = (form, order) => {
        const data = {
            buyer:{
                name: form.name,
                surname: form.surname,
                email: form.email
            },
            order
            
        }
        console.log("data", data)           
        db.collection("orders")
          //.doc(new Date().getTime().toString())
          .add(data)
          .then(() => {
            console.log("A new order has been added", "Success");
          })
          .catch(error => {
            console.log(error.message, "Create order failed");
           
          });
      };


    // el quantity no se guarda en un estado, sino que se calcula en base al cart cada vez que se modifica
    useEffect(()=>{
        setQuantity(() =>  cart.reduce((t, item) => t += item.quantity, 0))
    },[cart])



    return(
        <CartContext.Provider value={{cart, quantity, addToCart, removeFromCart, clear, checkOut}}>
            {children}
        </CartContext.Provider>
    )
}
