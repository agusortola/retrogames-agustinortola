import './itemdetail.css';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import { ItemCount } from './ItemCount';


function ItemDetail (item) {

    const { addToCart, removeFromCart, quantity } = useContext(CartContext)
    const [count, setCount] = useState(0);

    function handleAdd(){
        setCount(count + 1)
    }
 
    function handleConfirm(){
        addToCart(item, count)
    }

    function handleRemove(){
        setCount(count - 1)
        removeFromCart(item.id)
    }

    return ( 
        <div className="productDetail">
            <div className="img">
            <img src={item.img} alt=""/>
            </div>
            <div className="title">
                <h1>{item.title}</h1>
            </div>
            <div className="price">
                <h1>${item.price}</h1>
            </div>
            <div className="description">
                <p className="description">{item.detailedDescription}</p> 
            </div>
            <div className="itemCount">
                <ItemCount 
                    onAdd={handleAdd}
                    onRemove={handleRemove}
                    count={count}
                    onConfirm={handleConfirm}             
                />    
            </div>
        </div>
);   
}
 
export default ItemDetail;