import './item.css';

import {Link } from "react-router-dom";


export const Item = (props) => {


    
    return ( 
        <Link to = {{pathname: `/item/${props.id}`}}>
        <div className="product">
            <div className="img">
            <img src={props.img} alt=""/>
            </div>
            <div className="title">
                <h1 >{props.title}</h1>
            </div>
            <div className="price">
                <h1>${props.price}</h1>
            </div>
            <div className="description">
                <p className="description">{props.description}</p>
                 
            </div>
            <div className="console-tag">
                <p className="console">console: {props.console}</p>
            </div>
        </div>
        </Link>
     );
}

