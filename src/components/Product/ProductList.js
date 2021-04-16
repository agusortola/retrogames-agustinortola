import { Product }  from './Product'
import './productlist.css';



export const ProductList = (props) => {
    return (
        <div className="content">
                    <div className="productlist">
            {props.productList.map((product) => (
                <Product
                    img={product.img} 
                    title={product.title} 
                    price={product.price} 
                    console={product.console} 
                    description= {product.description}
                />
                ))
            }
        </div> 
        </div>


     );
}
 
