import './item.css';
import { Button } from '@material-ui/core';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import { ItemDetailContainer } from './ItemDetailContainer';
import {Link } from "react-router-dom";


export const Item = (props) => {
    const handleClick = () => {
        alert(`Añadiste ${props.title} al carrito.`)
    }


    
    return ( 

        <div className="product">
            <div className="img">
            <img src={props.img} alt=""/>
            </div>
            <div className="title">
                <h1 >{props.title}</h1>
            </div>
            <div className="price">
                <h1>${props.price}</h1>
            </div>
            <div className="description">
                <p className="description">{props.description}</p>
            </div>
            <div className="console-tag">
                <p className="console">console: {props.console}</p>
            </div>
            <div className="div-btn-add">
                <Button 
                    onClick={handleClick}
                    startIcon={<ShoppingCartIcon />} 
                    variant="contained"
                    style={{
                        fontSize:10,
                        fontFamily: "open-sans"
                    }} 
                    color="primary" 
                    size="small">
                        Add
                </Button>
                <Link to = {`/detail/${props.id}`}> Ver más
                </Link>
                
            </div>
        </div>
     );
}

