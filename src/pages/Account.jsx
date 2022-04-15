import React from 'react';
import Header from '../components/Header';
import '../styles/Account.scss';

const Account = () => {
    return (
        <><Header />
        <div className="login-ac">
            <div className="form-container-ac">
                <h1 className="title-ac">My account</h1>
                <form action="/" className="form-ac">
                    <div>
                        <label htmlFor="name" className="label-ac">Name</label>
                        <p className="value-ac">Camila Yokoo</p>
                        <label htmlFor="email" className="label-ac">Email</label>
                        <p className="value-ac">camilayokoo@gmail.com</p>
                        <label htmlFor="password" className="label-ac">Password</label>
                        <p className="value-ac">*********</p>
                    </div>
                    <button className="secondary-button-ac login-button-ac">
                        Edit
                    </button>

                </form>
            </div>
        </div>
        </>
    );
}

export default Account;