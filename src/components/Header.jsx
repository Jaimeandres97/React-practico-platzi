import React, {useState, useContext } from 'react';
import Menu from './Menu';
import MyOrders from '../containers/ShoppingCart';
import menuIcon from '../../curso-frontend-developer-practico/icons/icon_menu.svg';
import yardSaleLogo from '../../curso-frontend-developer-practico/logos/logo_yard_sale.svg';
import shoppingCartLogo from '../../curso-frontend-developer-practico/icons/icon_shopping_cart.svg';
import '../styles/Header.scss';
import AppContext from '../context/AppContext';
import MobileMenu from '../containers/MobileMenu';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);


    const handleToggle = () => {
        setToggle(!toggle);
    }

    return ( 
        <nav>
            <img src={menuIcon} alt="menu" className="menu" onClick={handleToggle}/>
            <div className="navbar-left">
                <img src={yardSaleLogo} alt="logo" className="logoHeader"/>
                <ul>
                    <li>
                    <a href="/">All</a>
                    </li>
                    <li>
                    <a href="/">Clothes</a>
                    </li>
                    <li>
                    <a href="/">Electronics</a>
                    </li>
                    <li>
                    <a href="/">Furnitures</a>
                    </li>
                    <li>
                    <a href="/">Toys</a>
                    </li>
                    <li>
                    <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}>
                    <img src={shoppingCartLogo} alt="shopping cart"/>
                    { state.cart.length > 0 ? 
                    <div>{state.cart.length}
                    </div> : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrders />}
            {toggle && <MobileMenu />}
        </nav>
    );
}

export default Header;