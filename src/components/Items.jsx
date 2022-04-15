import React, { useContext } from 'react';
import '../styles/Items.scss';
import addToCartImage from '../../curso-frontend-developer-practico/icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';


const Items = ({product}) => {
    const { addToCart } = useContext(AppContext);
    
    const handleClick = item => {
        addToCart(item);
    }

    return ( 
        <section className="main-container">
            <div className="cards-container">
                <div className="product-card">
                <img src={product.images[0]} alt={product.title} />
                <div className="product-info">
                    <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                    </div>
                    <figure onClick = {() => handleClick(product)}>
                    <img src={addToCartImage} alt="" />
                    </figure>
                    
                </div>
                </div>
            </div>
        </section>
    );
}

export default Items;
