import { Item }  from './Item'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = (props) => {
    const {id} = useParams()
    const items = props.productList.filter(p => p.id == id);
    const item = items[0];

    return (
        <div className="content">
            <div className="itemDetails">
                    <Item
                        img={item.img} 
                        title={item.title} 
                        price={item.price} 
                        console={item.console} 
                        description= {item.description}
                        id= {item.id}
                    />
            </div> 
        </div>
     );
}
 
