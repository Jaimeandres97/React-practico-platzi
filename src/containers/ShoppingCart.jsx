import React, {useContext} from 'react';
import AppContext from '../context/AppContext.js';
import '../styles/ShoppingCart.scss';
import arrow from '../../curso-frontend-developer-practico/icons/flechita.svg';
import OrderItem from '../components/OrderItem';

const ShoppingCart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return ( 
        <aside className="product-detail">
            <div className="title-container">
                <img src={arrow} alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map(product => (
                    <OrderItem 
                        product={product}
                        key={`orderItem-${product.id}`} 
                    />))}
                <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default ShoppingCart;