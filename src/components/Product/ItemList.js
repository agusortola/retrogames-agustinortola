import { Item }  from './Item'
import './ItemList.css';



export const ItemList = (item) => {
    return (
        
        <div className="content">
                    <div className="itemlist">
            {item.productList.map((item) => (
                <Item
                    img={item.img} 
                    title={item.title} 
                    price={item.price} 
                    console={item.console} 
                    description= {item.description}
                />
                ))
            }
        </div> 
        </div>


     );
}
 
