import './cart.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Item } from './Product/Item';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';



const Cart = () => {
    const cartItems = useContext(CartContext)


    return ( 
        <div className="content">
            
            {cartItems.cart.map((item) => (
                <Item
                    img={item.img}  
                    title={item.title} 
                    price={item.price} 
                />
            ))}
            <div className="btns" >
            {cartItems.cart.length>=1 ?
                <Button 
                    onClick={()=> cartItems.clear()}
                    startIcon={<DeleteIcon />} 
                    variant="contained"
                    size="small"
                    style={{
                    fontSize:10,
                    fontFamily: "open-sans",
                    backgroundColor: '#ff3f34',
                    borderColor: '#ff3f34',
                    padding:5,
                    margin:5
                    }}  
                >
                    Vaciar
                </Button>
                :
                <p>No hay items en el carrito.</p>
                }

                {cartItems.cart.length>=1 ? 
                    <Button 
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
     );
}
 
export default Cart;