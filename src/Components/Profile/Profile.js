import React from 'react'
import './Profile.css'
import Navbar from '../Home/Navbar'
import Picture from '../../Resources/images/extraVolunteer.png'

const Profile = () => {
    return (
        <>
            <Navbar />
            <section className="profile d-flex flex-wrap align-items-center justify-content-center">
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className="row item">
                    <div className="col-6 p-0">
                        <img className="w-100" src={Picture} alt="Volunteering Item" />
                    </div>
                    <div className="col-6 position-relative">
                        <h4>Humanity More</h4>
                        <button>Cancel</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;