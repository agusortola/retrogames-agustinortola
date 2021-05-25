import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import {useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { CartContext } from '../CartContext';
import { getFireStore } from '../../firebase';

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
 