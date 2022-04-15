import React from 'react';
import '../styles/ProductDetail.scss';
import IconClose from '../../curso-frontend-developer-practico/icons/icon_close.png';
import AddToCart from '../../curso-frontend-developer-practico/icons/bt_add_to_cart.svg';

const ProductDetail = () => {
    return ( 
        <aside className="product-detail-pd">
            <div className="product-detail-close-pd">
                <img src={IconClose} alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className="product-info-pd">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button className="primary-button-pd add-to-cart-button-pd">
                <img src={AddToCart} alt="add to cart" />
                Add to cart
                </button>
            </div>
        </aside>

    );
}

export default ProductDetail;