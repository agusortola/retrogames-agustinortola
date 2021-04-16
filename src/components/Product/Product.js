import './product.css';
import { Button } from '@material-ui/core';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';

export const Product = (props) => {
    const handleClick = () => {
        alert(`Añadiste ${props.title} al carrito.`)
    }
    
    return ( 

        <div className="product">
            <div className="img">
            <img src={props.img} alt=""/>
            </div>
            <div className="title">
                <h1>{props.title}</h1>
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
                
            </div>
        </div>
     );
}

//TODO Subir las imagenes a la nube - imgur  