import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../Home/Navbar'
import { GlobalData } from '../Main/Main'

const Profile = () => {
    const [detectDeleted, checkDeleted] = useState(false)
    const loginInfo = useContext(GlobalData).login[0]
    const [registeredWorks, setRegisteredWorks] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/seeVolunteerWork', {
            method: 'POST',
            body: JSON.stringify({ userEmail: loginInfo.email }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => setRegisteredWorks(data))
    }, [detectDeleted])

    const cancelVolunteering = (id) => {
        fetch('http://localhost:4000/cancelVolunteering', {
            method: 'DELETE',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                alert(`${data.deletedCount} work canceled`)
                checkDeleted(true)
            })
    }
    return (
        <>
            <Navbar />
            <section className="profile d-flex flex-wrap align-items-center justify-content-center">
                {
                    registeredWorks.map(work => {
                        const { _id, date, volunteeringWork, image } = work
                        return (
                            <div key={_id} className="row item">
                                <div className="col-6 p-0">
                                    <img className="w-100" src={require(`../../Resources/images/${image}`)} alt="Volunteering Item" />
                                </div>
                                <div className="col-6 position-relative">
                                    <h4>{volunteeringWork}</h4>
                                    <h6>{date}</h6>
                                    <button onClick={() => cancelVolunteering(_id)}>Cancel</button>
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