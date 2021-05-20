import './cart.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';



const Cart = () => {
    const cartItems = useContext(CartContext)
    
    let total = 0;
    cartItems.cart.forEach(i => Math.round((total += (i.item.price * i.quantity) + Number.EPSILON) * 100) / 100)

    return (
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

            <div className="total">
                <p>Total: {total}</p>
            </div>
            
            <div className="btns" >
            {cartItems.cart.length>=1 ?
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
                :<div class="nes-balloon from-left is-dark">
                <span class="nes-text is-error"><p>No hay items en el carrito.</p></span>
                </div>
                }

                {cartItems.cart.length>=1 ? 
                    <Button className='btns'
                        onClick={()=> cartItems.checkOut()}
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
                        Finalizar
                    </Button>
                    :
                    <></>
                }
            </div>
        </div>
        </div>
     );
}
 
export default Cart;