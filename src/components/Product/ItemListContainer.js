import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';


export const  ItemListContainer = (props) => {
  const { categoryId } = useParams();
  return (
    <div className="itemListContainer">
           <ItemList category={categoryId} />
    </div>
  );
};