import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));
const Home = () => {
    const classes = useStyles()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [volunteeringTypes, setVolunteeringTypes] = useState([])
    useEffect(() => {
        fetch('https://agile-plains-56011.herokuapp.com/volunteeringTypes')
            .then(res => res.json())
            .then(data => {
                setVolunteeringTypes(data)
                setLoading(false)
            })
    }, [])

    const volunteeringRegister = (type) => {
        const { image, name } = type
        history.push(`/register?name=${name}&image=${image}`)
    }

    return (
        <>
            <Navbar />
            <section className="volunteering-contents py-4">
                <div className="background-image"></div>
                <h2 className="text-center text-uppercase mb-4">I grow by helping people in need</h2>
                <div className="search-form d-flex justify-content-center mb-4">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <main className="volunteering-item container px-5 w-100 d-flex flex-wrap justify-content-center">
                    {
                        loading ?
                            <div className={classes.root}>
                                <CircularProgress />
                            </div>
                            : <>
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
                            </>
                    }
                </main>
            </section>
        </>
    );
};

export default Home;