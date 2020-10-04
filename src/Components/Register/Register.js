import React, { useContext, useState } from 'react'
import './Register.css'
import Logo from '../../Resources/logos/Group1329.png'
import { useHistory, useLocation } from 'react-router-dom'
import { GlobalData } from '../Main/Main'

const useQuery = () => new URLSearchParams(useLocation().search)

const Register = () => {
    const history = useHistory()
    const query = useQuery()
    const [id, name] = [query.get('id'), query.get('name')]

    const loginInfo = useContext(GlobalData).login[0]
    // const loginInfo = { isLoggedIn: true, displayName: "BK", email: "bk@bk.com" }
    const [formInfo, setFormInfo] = useState({
        userName: loginInfo.displayName, userEmail: loginInfo.email, date: '', volunteeringWork: name, description: ''
    })
    const [errorMessage, setErrorMessage] = useState({
        date: ''
    })
    const collectFormInfo = (e) => {
        setFormInfo({ ...formInfo, date: e.target.value })
        setErrorMessage({ date: '' })
    }

    const registerVolunteer = (e) => {
        e.preventDefault()
        if (!formInfo.date) {
            setErrorMessage({ date: 'Please insert a valid date' })
            return
        }

        fetch('http://localhost:4000/registerVolunteerWork', {
            method: 'POST',
            body: JSON.stringify(formInfo),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                alert(`${data.insertedCount} volunteering work inserted successfully`)
                history.push('/profile')
            })
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="register-area d-flex flex-column align-items-center">
            <img className="top-logo my-4" src={Logo} alt="Logo" onClick={() => history.push('/')} />
            <main >
                <h4 className="mt-3 font-weight-bold">Register as a volunteer</h4>
                <form className="d-flex flex-column mb-3 align-items-center justify-content-between" onSubmit={registerVolunteer} >
                    <input type="text" placeholder="Full Name" value={formInfo.userName} readOnly />
                    <span className="error align-self-start"></span>

                    <input type="text" placeholder="Username or Email" value={formInfo.userEmail} readOnly />
                    <span className="error align-self-start"></span>

                    <input type="date" placeholder="Date" onChange={collectFormInfo} />
                    <span className="error align-self-start">{errorMessage.date}</span>

                    <input type="text" placeholder="Volunteering Type" value={formInfo.volunteeringWork} readOnly />
                    <span className="error align-self-start"></span>

                    <textarea name="instruction" placeholder="Description" onBlur={(e) => setFormInfo({ ...formInfo, description: e.target.value })}></textarea>
                    <input type="submit" value="Registration" />
                </form>
            </main>
        </section>
    );
};

export default Register