import React, { useEffect, useState } from 'react'
import './Admin.css'
import DeleteIcon from '@material-ui/icons/Delete'
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
const RegisterList = () => {
    const classes = useStyles()
    const [checkDeleted, setCheckDeleted] = useState(false)
    const [loading, setLoading] = useState(true)
    const [registeredVolunteers, checkRegisteredVolunteers] = useState([])
    useEffect(() => {
        fetch('https://agile-plains-56011.herokuapp.com/adminSeeAddEvents')
            .then(res => res.json())
            .then(data => {
                checkRegisteredVolunteers(data)
                setLoading(false)
            })
    }, [checkDeleted])
    const deleteVolunteeringWork = (id) => {
        fetch('https://agile-plains-56011.herokuapp.com/cancelVolunteering', {
            method: 'DELETE',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                alert(`${data.deletedCount} work deleted`)
                setCheckDeleted(true)
            })
    }
    return (
        <section className="register-list px-3">
            <h4 className="py-3">Volunteer Register List</h4>
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="px-5">
                    {
                        loading ?
                            <div className={classes.root}>
                                <CircularProgress />
                            </div>
                            : <>
                                {
                                    registeredVolunteers.map(volunteer => {
                                        const { _id, date, userName, userEmail, volunteeringWork } = volunteer
                                        return (
                                            <tr key={_id}>
                                                <td>{userName}</td>
                                                <td>{userEmail}</td>
                                                <td>{date}</td>
                                                <td>{volunteeringWork}</td>
                                                <td className="text-center">
                                                    <span className="trash pb-2" onClick={() => deleteVolunteeringWork(_id)}><DeleteIcon /></span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                    }
                </tbody>
            </table>
        </section>
    );
};

export default RegisterList;