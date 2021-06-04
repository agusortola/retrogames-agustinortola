import './cart.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {Form} from './Form'



const Cart = () => {
    const cartItems = useContext(CartContext)
    const [form, setForm] = useState({})
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
                <Button className='btns'
                    onClick={()=> cartItems.clear()}
                    startIcon={<DeleteIcon />} 
                    variant="contained"
                    size="small"
                    style={{
                    fontSize:10,
                    fontFamily: "open-sans",
                    backgroundColor: '#ff3f34',
                    borderColor: '#ff3f34',
                    }}  
                >
                    Vaciar
                </Button>
                <Form 
                    onSubmit={onSubmit}
                    setIsDisabledButton={setIsDisabledButton}
                />

                {isDisabledButton ?
                <Button className='btns'
                    disabled
                    variant="contained"
                    size="small"
                    style={{
                    fontSize:10,
                    fontFamily: "open-sans",
                    backgroundColor: 'grey',
                    borderColor: 'green',
                    padding:5,
                    margin:5
                    }}  
                >
                    Crear Orden
                </Button>
                :
                <Button className='btns'
                onClick={()=> cartItems.checkOut(form)}
                startIcon={<DoneAllIcon />} 
                variant="contained"
                size="small"
                style={{
                fontSize:10,
                fontFamily: "open-sans",
                backgroundColor: 'green',
                borderColor: 'green',
                padding:5,
                margin:5
                }}  
            >
                Crear Orden
            </Button>    
                
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