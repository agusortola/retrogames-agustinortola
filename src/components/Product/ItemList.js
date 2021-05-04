import { Item }  from './Item'
import './ItemList.css';
import {useState} from 'react'



const ItemList = () => {

    const [items, setItems] = useState([])
    
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

      const getData = (data) => {
        return new Promise((res, rej) => {
          setTimeout(()=> {
            return res (setItems(data))
          }, 500)
        })
      }
      getData(db)

    

    return (
        
        <div className="content">
            <div className="itemlist">
                {items.map((item) => (
                    <Item
                        img={item.img} 
                        title={item.title} 
                        price={item.price} 
                        console={item.console} 
                        description= {item.description}
                        detailedDescription= {item.detailedDescription}
                        id= {item.id}
                    />
                ))}
            </div> 
        </div>


     );
}

export default ItemList;
 
