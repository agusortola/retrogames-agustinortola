import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = (props) => {
  
  const { item } = props.location.state

return (
    <div className="content">
      {item && <ItemDetail 
        img={item.img} 
        title={item.title} 
        price={item.price} 
        console={item.categoryId} 
        detailedDescription= {item.detailedDescription}
        id= {item.id}
      />}
    </div>
     );
}
 