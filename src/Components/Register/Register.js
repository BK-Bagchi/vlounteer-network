import React from 'react'
import './Register.css'
import Logo from '../../Resources/logos/Group1329.png'
import { useHistory, useLocation } from 'react-router-dom'

const useQuery = () => new URLSearchParams(useLocation().search)

const Register = () => {
    const history = useHistory()
    const query = useQuery()
    const [id, name] = [query.get('id'), query.get('name')]

    const registerVolunteer = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/registerVolunteerWork', {
            method: 'POST',
            body: JSON.stringify({ id, name }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => alert(`${data.insertedCount} volunteering work inserted successfully`))
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
                    <input type="text" placeholder="Full Name" value="Balay Kumar Bagchi" readOnly />
                    <span className="error align-self-start"></span>

                    <input type="text" placeholder="Username or Email" value="bkbagchi.dipto@gmail.com" readOnly />
                    <span className="error align-self-start"></span>

                    <input type="date" placeholder="Date" />
                    <span className="error align-self-start"></span>

                    <input type="text" placeholder="Volunteering Type" value={name} readOnly />
                    <span className="error align-self-start"></span>

                    <textarea name="instruction" placeholder="Description"></textarea>
                    <input type="submit" value="Registration" />
                </form>
            </main>
        </section>
    );
};

export default Register