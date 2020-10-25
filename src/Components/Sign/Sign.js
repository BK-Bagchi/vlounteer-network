import React, { useContext } from 'react'
import './Sign.css'
import Google from '../../Resources/logos/google-logo.png'
import Logo from '../../Resources/logos/Group1329.png'
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './FirebaseConfig'
import { GlobalData } from '../Main/Main'
import { useHistory, useLocation } from 'react-router-dom'

firebase.initializeApp(firebaseConfig)
const Sign = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }
    const setLoginInfo = useContext(GlobalData).login[1]

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user
                setLoginInfo({
                    isLoggedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                })
                history.replace(from)
            })
            .catch((error) => {
                const { code, message, email, credential } = error
                console.log(code, "| |", message, "| |", email, "| |", credential)
            });
    }
    return (
        <section className="signIn-area d-flex flex-column align-items-center">
            <img className="top-logo my-4" src={Logo} alt="Logo" onClick={() => history.push('/')} />
            <main>
                <h4 className="text-center mb-4">Login With</h4>
                <div className="d-flex mb-3 align-items-center justify-content-between cursor" onClick={googleSignIn}>
                    <img src={Google} alt="Google Logo" />
                    <p className="mx-auto m-0">Continue with Google</p>
                </div>
                <p className="text-center">Don't have an account?<span>Create an account</span></p>
            </main>
        </section>
    );
};

export default Sign;