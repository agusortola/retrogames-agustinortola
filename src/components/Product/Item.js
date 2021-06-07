import "./item.css"
import {Link } from "react-router-dom";

export const Item = (props) => {
    return ( 
        
            <div className="product">
                <Link to = {{pathname: `/item/${props.id}`, state: { item: props }}}>
                <div className="img">
                <img src={props.img} alt=""/>
                </div>
                <div className="title">
                    <h1 >{props.title}</h1>
                </div>
                <div className="price">
                    <h1>{props.price} <i class="nes-icon coin is-small"> </i></h1>
                </div>
                <div className="description">
                    <p className="description">{props.description}</p>
                </div>
                <div className="console-tag">
               
                    <i class="snes-logo"></i>
                    <p className="console">{props.console}</p>
                </div>
                </Link>
            </div>
        
     );
}