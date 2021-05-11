import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const CartWidget = () => {
    return ( 
        <IconButton color="primary" aria-label="add to shopping cart">        
        <ShoppingCartIcon                     
            style={{
                padding:0,
                margin:0
            }}  
        />
    </IconButton>    
     );
}
 
export default CartWidget;