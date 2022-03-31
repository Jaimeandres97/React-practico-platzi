import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../containers/Layout';
import CreatePassword from '../containers/CreatePassword';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import Login from '../containers/Login';
import CreateAccount from '../containers/CreateAccount';
import Account from '../containers/Account';
import Items from '../components/Items';
import Menu from '../components/Menu';
import MobileMenu from '../containers/MobileMenu';
import MyOrder from '../containers/MyOrder';
import MyOrders from '../containers/MyOrders';
import ProductDetail from '../containers/ProductDetail';
import ShoppingCart from '../components/ShoppingCart';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Login" element = {<Login/>} />
                    <Route path="/Account" element = {<Account/>} />
                    <Route path="/create-account" element = {<CreateAccount/>} />
                    <Route path="/create-password" element = {<CreatePassword/>} />
                    <Route path="/recovery-password" element={<RecoveryPassword/>} />
                    <Route path="/Items" element={<Items/>} />
                    <Route path="/Menu" element={<Menu/>} />
                    <Route path="/mobile-menu" element={<MobileMenu/>} />
                    <Route path="/my-order" element={<MyOrder/>} />
                    <Route path="/my-orders" element={<MyOrders/>} />
                    <Route path="/product-detail" element={<ProductDetail/>} />
                    <Route path="/shopping-cart" element={<ShoppingCart/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;