import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';


export const  ItemListContainer = () => {
  const { categoryId } = useParams();  
  console.log(useParams())
  return (
    <div className="itemListContainer">
           <ItemList category={categoryId} />
    </div>
  );
};