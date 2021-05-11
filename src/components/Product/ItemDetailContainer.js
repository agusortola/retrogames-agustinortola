import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import {useContext, useState } from 'react';
import ItemDetail from './ItemDetail';
import { CartContext } from '../CartContext';



export const ItemDetailContainer = (item) => {

  const {addToCart} = useContext(CartContext)

  const db = [
    {
      img: 'https://i.imgur.com/4l2kSvN.jpg',
      title: 'Monkey Island I',
      price: 9.90,
      console: 'PC',
      description: 'Aventura gráfica - 1990.',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sociosqu phasellus aptent, augue accumsan sagittis velit elementum aliquam senectus risus felis. Taciti mauris turpis venenatis auctor eleifend enim varius lobortis magna diam, aliquet vulputate senectus gravida montes molestie felis pretium quis massa, praesent himenaeos ante ligula platea faucibus dapibus tempor integer. Diam taciti pharetra ultricies class pretium rutrum bibendum vulputate aliquam platea, tortor iaculis non hendrerit sed sociis senectus pellentesque turpis nunc, condimentum ad eu dui congue tempor commodo faucibus ornare.',
      id: 1
    },
    {
      img: 'https://i.imgur.com/Qx6xnVG.jpg',
      title: 'Ristar',
      price: 7.30,
      console: 'SEGA',
      description: 'Plataforma - 1995'  ,
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sociosqu phasellus aptent, augue accumsan sagittis velit elementum aliquam senectus risus felis. Taciti mauris turpis venenatis auctor eleifend enim varius lobortis magna diam, aliquet vulputate senectus gravida montes molestie felis pretium quis massa, praesent himenaeos ante ligula platea faucibus dapibus tempor integer. Diam taciti pharetra ultricies class pretium rutrum bibendum vulputate aliquam platea, tortor iaculis non hendrerit sed sociis senectus pellentesque turpis nunc, condimentum ad eu dui congue tempor commodo faucibus ornare.',
      id:2
    },
    {
      img: 'https://i.imgur.com/FRQhWjZ.jpg',
      title: 'Road Rash',
      price: 12.60,
      console: 'PC',
      description: 'Carreras - 1991',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sociosqu phasellus aptent, augue accumsan sagittis velit elementum aliquam senectus risus felis. Taciti mauris turpis venenatis auctor eleifend enim varius lobortis magna diam, aliquet vulputate senectus gravida montes molestie felis pretium quis massa, praesent himenaeos ante ligula platea faucibus dapibus tempor integer. Diam taciti pharetra ultricies class pretium rutrum bibendum vulputate aliquam platea, tortor iaculis non hendrerit sed sociis senectus pellentesque turpis nunc, condimentum ad eu dui congue tempor commodo faucibus ornare.',
      id:3
    }
  ]
    const {id} = useParams()
    const items = db.filter(p => p.id == id);
    const i= items[0];
  
return (
    <div className="content">
      <ItemDetail 
        img={i.img} 
        title={i.title} 
        price={i.price} 
        console={i.console} 
        detailedDescription= {i.detailedDescription}
        id= {i.id}
        addToCart
        removeFromCart
      />
    </div>
     );
}
 
