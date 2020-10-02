import React from 'react'
import './Sign.css'
import Google from '../../Resources/logos/google-logo.png'
import Logo from '../../Resources/logos/Group1329.png'

const Sign = () => {
    return (
        <section className="signIn-area d-flex flex-column align-items-center">
            <img className="top-logo my-4" src={Logo} alt="Logo" />
            <main>
                <h4 className="text-center mb-4">Login With</h4>
                <div className="d-flex mb-3 align-items-center justify-content-between">
                    <img src={Google} alt="Google Logo" />
                    <p className="mx-auto m-0">Continue with Google</p>
                </div>
                <p className="text-center">Don't have an account?<span>Create an account</span></p>
            </main>
        </section>
    );
};

export default Sign;