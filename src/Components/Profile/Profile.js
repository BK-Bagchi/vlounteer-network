import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../Home/Navbar'
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

const Profile = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [detectDeleted, checkDeleted] = useState(false)
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const [registeredWorks, setRegisteredWorks] = useState([])

    useEffect(() => {
        fetch('https://agile-plains-56011.herokuapp.com/seeVolunteerWork', {
            method: 'POST',
            body: JSON.stringify({ userEmail: loginInfo.email }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setRegisteredWorks(data)
                setLoading(false)
            })
    }, [detectDeleted])

    const cancelVolunteering = (id) => {
        fetch('https://agile-plains-56011.herokuapp.com/cancelVolunteering', {
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
                    loading ?
                        <div className={classes.root}>
                            <CircularProgress />
                        </div>
                        : <>
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
                        </>
                }
            </section>
        </>
    );
};

export default Profile;