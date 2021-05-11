import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to = {{pathname: `/cart`}}>
        <IconButton color="primary" aria-label="add to shopping cart">        
        <ShoppingCartIcon                     
            style={{
                padding:0,
                margin:0
            }}  
        />
    </IconButton>    
    </Link> 
     );
}
 
export default CartWidget;