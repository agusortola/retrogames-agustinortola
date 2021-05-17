import { Button, ButtonGroup } from "@material-ui/core";
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export const ItemCount = (props) => {

    return ( 
    <ButtonGroup color="primary" size="small" aria-label="small outlined button group">
        <Button 
            onClick={() => props.onRemove()}
            startIcon={<RemoveIcon />} 
            variant="outlined"
            size="small"    
        >
        </Button>
            <Button
                endIcon={<ShoppingCartIcon />} 
                variant="contained"
                size="small"
                onClick={() => props.onConfirm()}
            > {props.count} add to
            </Button>
        <Button
            onClick={() => props.onAdd()}
            startIcon={<AddIcon />} 
            variant="outlined"
            size="small"                    
        >
        </Button>
    </ButtonGroup>

     );
}
 
