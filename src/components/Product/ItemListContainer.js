import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import "./itemListContainer.css";
import {useEffect, useState} from 'react';
import { getFireStore } from '../../firebase';

export const  ItemListContainer = (props) => {
  
  const { categoryId } = useParams();
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
    <div className="itemListContainer">
      <ItemList category={categoryId} items={items}/>
    </div>
  );
};