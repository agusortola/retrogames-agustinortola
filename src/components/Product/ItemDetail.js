import './itemdetail.css';
import { Button } from '@material-ui/core';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';


function ItemDetail (item) {

    return ( 
      <div className="productDetail">
      <div className="img">
      <img src={item.img} alt=""/>
      </div>
      <div className="title">
          <h1 >{item.title}</h1>
      </div>
      <div className="price">
          <h1>${item.price}</h1>
      </div>
      <div className="description">
          <p className="description">{item.detailedDescription}</p> 
      </div>
      <div className="console-tag">
          <p className="console">console: {item.console}</p>
      </div>
      <div className="div-btn-add">
          <Button 
              startIcon={<ShoppingCartIcon />} 
              variant="contained"
              style={{
                  fontSize:10,
                  fontFamily: "open-sans"
              }} 
              color="primary" 
              size="small">
                  Add
          </Button>
          
      </div>
  </div>
);   
}
 
export default ItemDetail;