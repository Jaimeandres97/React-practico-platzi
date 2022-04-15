import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../containers/Layout';
import CreatePassword from '../pages/CreatePassword';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Account from '../pages/Account';
import Items from '../components/Items';
import Menu from '../components/Menu';
import MobileMenu from '../containers/MobileMenu';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../containers/MyOrders';
import ProductDetail from '../components/ProductDetail';
import ShoppingCart from '../containers/ShoppingCart';
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import OrderItem from '../components/OrderItem';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
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
                        <Route path="/product-list" element={<ProductList/>} />
                        <Route path='/order-items' element={<OrderItem/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;