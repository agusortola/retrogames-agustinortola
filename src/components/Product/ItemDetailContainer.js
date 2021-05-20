import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import {useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { CartContext } from '../CartContext';
import { getFireStore } from '../../firebase';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const {id} = useParams()


  useEffect(
    () => {
      
      const db = getFireStore()
      const itemCollection = db.collection('items')
      const filteredQuery = itemCollection.where('id', '==', Number.parseInt(id));
      filteredQuery.get().then(
        (querySnapshot) => {
          setItem(prev => querySnapshot.docs[0].data());
        }).catch(
          (error) => console.error("Firestore error:", error)
        )
    }, [])
  
  const {addToCart} = useContext(CartContext)

return (
    <div className="content">
      {item && <ItemDetail 
        img={item.img} 
        title={item.title} 
        price={item.price} 
        console={item.categoryId} 
        detailedDescription= {item.detailedDescription}
        id= {item.id}
        addToCart
        removeFromCart
      />}
    </div>
     );
}
 