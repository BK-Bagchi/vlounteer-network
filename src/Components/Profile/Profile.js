import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../Home/Navbar'
import Picture from '../../Resources/images/extraVolunteer.png'

const Profile = () => {
    const [registeredWorks, setRegisteredWorks] = useState([])
    console.log(registeredWorks)
    useEffect(() => {
        fetch('http://localhost:4000/seeVolunteerWork')
            .then(res => res.json())
            .then(data => setRegisteredWorks(data))
    }, [])
    return (
        <>
            <Navbar />
            <section className="profile d-flex flex-wrap align-items-center justify-content-center">
                {
                    registeredWorks.map(work => {
                        const { _id, name } = work
                        return (
                            <div key={_id} className="row item">
                                <div className="col-6 p-0">
                                    <img className="w-100" src={Picture} alt="Volunteering Item" />
                                </div>
                                <div className="col-6 position-relative">
                                    <h4>{name}</h4>
                                    <h6>Date</h6>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    );
};

export default Profile;