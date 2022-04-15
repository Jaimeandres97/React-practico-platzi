import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return ( 
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/my-orders" className="title">My orders</a>
                </li>
                <li>
                    <a href="/Account">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;