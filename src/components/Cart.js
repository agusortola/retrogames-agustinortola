import './cart.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {Form} from './Form'




const Cart = () => {
    const cartItems = useContext(CartContext)
    const [form, setForm] = useState([])
    const [isDisabledButton, setIsDisabledButton] = useState(true)
    
    let total = 0;
    cartItems.cart.forEach(i => Math.round((total += (i.item.price * i.quantity) + Number.EPSILON) * 100) / 100)
    
    const onSubmit = (form) =>{
       setForm(form)
    }
    
    return (
        <>
            <div className="container">
                <div className="item">
                    {cartItems.cart.map((item) => (
                        <div className='row'>
                            <div className='qty'>
                            {item.quantity} x 
                            </div>
                            <div className='qty'>
                                {item.item.title}
                            </div>
                            <div className='qty'>
                                {item.item.price * item.quantity}
                            </div>
                            <button
                                onClick={()=>{cartItems.removeFromCart(item.item.id)}}
                                style={{
                                    display: "inline-block",
                                    color: "#ff5252",
                                }}
                            >
                            <i class="nes-icon close is-small"></i>
                            </button>
                        </div>
                    ))}
                    {cartItems.cart.length>=1 ?
                    <div className="total">
                        <p>Total: {total}</p>
                    </div>
                    : 
                    <> 
                    </>
                    }
                    {cartItems.cart.length>=1 ?
                        <>
                        <Form 
                            onSubmit={onSubmit}
                            setIsDisabledButton={setIsDisabledButton}
                            
                        />

                        {isDisabledButton ?
                            <div className= "btns">
                                <Button class="nes-btn is-error"
                                onClick={()=> cartItems.clear()}
                                style={{padding:20, marginTop: 20, width: '50%'}} 
                
                                >
                                    Vaciar Carrito
                                </Button>
                                <Button class="nes-btn is-disabled"
                                    disabled
                                    style={{padding:20, marginTop: 20}}
                                >
                                    Crear Orden
                                </Button>
                            </div>
                            :
                            <div className= "btns">
                                <Button class="nes-btn is-error"
                                onClick={()=> cartItems.clear()}
                                style={{padding:20, marginTop: 20, width: '50%'}} 

                                >
                                    Vaciar Carrito
                                </Button>
                                <Button class= "nes-btn is-success"
                                    onClick={()=> cartItems.checkOut(form)}
                                    style={{padding:20, marginTop: 20}}
                                >
                                Crear Orden
                                </Button>    
                            </div>
                        }
                        </>
                        :
                        <div class="nes-balloon from-left is-dark">
                            <span class="nes-text is-error"><p>No hay items en el carrito.</p></span>
                        </div>  
                    }
                </div>
            </div>
        </>

     );
}
 
export default Cart;