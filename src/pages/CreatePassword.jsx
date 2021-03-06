import React from 'react';
import '../styles/CreatePassword.scss';
import yardSaleLogo from '../../curso-frontend-developer-practico/logos/logo_yard_sale.svg';
import Header from '../components/Header';

const CreatePassword = () => {
    return ( 
        <><Header />
        <div className="login">
            <div className="form-container">
                <img src={yardSaleLogo} alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>
                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div></>
    );
}

export default CreatePassword;