import React, { useRef} from 'react';
import '../styles/Login.scss';
import yardSaleLogo from '../../curso-frontend-developer-practico/logos/logo_yard_sale.svg';
import Header from '../components/Header';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return ( 
        <><Header />
        <div className="login-log">
            <div className="form-container-log">
                <img src={yardSaleLogo} alt="logo" className="logo-log" />
                <form action="/" className="form-log" ref= {form}>
                    <label htmlFor="email" className="label-log">Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className="input-log input-email-log" />
                    <label htmlFor="password" className="label-log">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input-log input-password-log" />
                    <button 
                        className="primary-button-log login-button-log"
                        onClick={handleSubmit}>
                        Log In
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button 
                    className="secondary-button-log signup-button-log">
                    Sign up
                </button>
            </div>
        </div></>

    );
}

export default Login;