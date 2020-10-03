import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    const [volunteeringTypes, setVolunteeringTypes] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/volunteeringTypes')
            .then(res => res.json())
            .then(data => setVolunteeringTypes(data))
    }, [])

    const volunteeringRegister = (type) => {
        const { _id, name } = type
        history.push(`/register?id=${_id}&name=${name}`)
    }

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
                    {
                        volunteeringTypes.map(type => {
                            const { _id, color, image, name } = type
                            return (
                                <div key={_id} className="each-item mx-2 my-2" style={{ background: color }} onClick={() => volunteeringRegister(type)}>
                                    <img className="w-100" src={require(`../../Resources/images/${image}`)} alt="Volunteering Item" />
                                    <footer className="h-25 d-flex align-items-center justify-content-center">
                                        <p className="m-0 text-center text-capitalize">{name}</p>
                                    </footer>
                                </div>
                            )
                        })
                    }
                </main>
            </section>
        </>
    );
};

export default Home;