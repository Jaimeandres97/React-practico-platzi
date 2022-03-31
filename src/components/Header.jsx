import React from 'react';
import menuIcon from '../../curso-frontend-developer-practico/icons/icon_menu.svg';
import yardSaleLogo from '../../curso-frontend-developer-practico/logos/logo_yard_sale.svg';
import shoppingCartLogo from '../../curso-frontend-developer-practico/icons/icon_shopping_cart.svg';
import '../styles/Header.scss';

const Header = () => {
    return ( 
        <nav>
            <img src={menuIcon} alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src={yardSaleLogo} alt="logo" className="logo"/>
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
                    <li className="navbar-email">platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                    <img src={shoppingCartLogo} alt="shopping cart"/>
                    <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;