import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Image from '../../Resources/images/animalShelter.png'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="volunteering-contents py-4">
                <h2 className="text-center text-uppercase mb-4">I grow by helping people in need</h2>
                <div className="search-form d-flex justify-content-center mb-4">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <main className="volunteering-item px-5 w-100 d-flex flex-wrap justify-content-center">
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                    <div className="each-item mx-2 my-2">
                        <img className="w-100" src={Image} alt="Volunteering Item" />
                        <footer className="h-25 d-flex align-items-center justify-content-center">
                            <p className="m-0 text-center">Foster a shelter animal</p>
                        </footer>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Home;