import { Item }  from './Item';
import './ItemList.css';
import {useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import { getFireStore } from '../../firebase';



const ItemList = (props) => {

    const [items, setItems] = useState([])
    const [isEmptyCategory, setIsEmptyCategory] = useState(false)
    
    useEffect(
      () => {
        const db = getFireStore()
        const itemColection = db.collection('items')
        itemColection.get().then(
          (querySnapshot) => {
           if (querySnapshot.size === 0) {
              setIsEmptyCategory(true)
           }
          setItems(querySnapshot.docs.map((doc) => doc.data()))
          }).catch(
            (error) => console.error("Firestore error:", error)
          )
      }, [])

    return (
    
          <Grid
            className="itemlist"
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
          >
            {items.filter(i => props.category == null || i.console == props.category).map((item) => (
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
 
