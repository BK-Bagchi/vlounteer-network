import React from 'react'
import './Register.css'
import Logo from '../../Resources/logos/Group1329.png'

const Register = () => {
    return (

        <section className="register-area d-flex flex-column align-items-center">
            <img className="top-logo my-4" src={Logo} alt="Logo" />
            <main >
                <h4 className="mt-3 font-weight-bold">Register as a volunteer</h4>
                <form className="d-flex flex-column mb-3 align-items-center justify-content-between">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="submit" value="Registration" />
                </form>
            </main>
        </section>
    );
};

export default Register