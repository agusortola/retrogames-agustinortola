import './itemdetail.css';
import { Button } from '@material-ui/core';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import {useState, useRef, useEffect } from 'react';
import {Link} from "react-router-dom"


function ItemDetail (item) {

    const [enableCancel, setEnableCancel] = useState(false);
    const [enableCheckout, setEnableCheckout] = useState(false);
    const [enableAdd, setEnableAdd] = useState(true);
   

    const [itemCount,setItemCount] = useState(0)

    function handleAdd(e){
        setItemCount(1)
        setEnableAdd(false)
        setEnableCancel(true)
        setEnableCheckout(true)
    }
   
    function handleCancel(){
        setEnableCancel(false)
        setEnableCheckout(false)
        setEnableAdd(true)
        setItemCount(0)
    }
    
    function handleCheckout(){
        console.log('asd')
    }

    return ( 
        <div className="productDetail">
        <div className="img">
        <img src={item.img} alt=""/>
        </div>
        <div className="title">
            <h1 >{item.title}</h1>
        </div>
        <div className="price">
            <h1>${item.price}</h1>
        </div>
        <div className="description">
            <p className="description">{item.detailedDescription}</p> 
        </div>
        <div className="console-tag">
            <p className="console">console: {item.console}</p>
        </div>
        <div className="div-btn-add">
        {enableAdd &&
            <Button color="secondary"
                    onClick={handleAdd}
                    startIcon={<ShoppingCartIcon />} 
                    variant="contained"
                    
                    style={{
                        
                    fontSize:10,
                    fontFamily: "open-sans"
                }} 
                color="primary" 
                size="small">
                    Add
            </Button>}

            <Link to = {{pathname: `/cart`}}>        
                {enableCheckout &&
                
                    <Button
                
                        onClick={handleCheckout}
                        startIcon={<ShoppingCartIcon />} 
                        variant="contained"
                        size="small"                    
                        style={{
                        fontSize:10,
                        fontFamily: "open-sans",
                        backgroundColor: '#05c46b',
                        borderColor: '#05c46b',
                }}                  
                    >
                        Comprar
                    </Button>}
            </Link>
                
            {enableCancel && 
                <Button 
                onClick={handleCancel}
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
                    Quitar
                </Button> 
            }          
        </div>
  </div>
);   
}
 
export default ItemDetail;