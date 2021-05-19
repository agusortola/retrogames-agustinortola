import { Item }  from './Item';
import './ItemList.css';
import { Grid } from '@material-ui/core';


const ItemList = (props) => {
  console.log(props.items)
    return (
      
          <Grid
            className="itemlist"
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
          >
            {props.items.filter(i => props.category == null || i.categoryId == props.category).map((item) => (
              <Grid item xs={4}>
                <Item 
                  img={item.img} 
                  title={item.title} 
                  price={item.price} 
                  console={item.categoryId} 
                  id= {item.id}
                />
              </Grid>
            ))}
          </Grid>
      
     );
}

export default ItemList;
 
