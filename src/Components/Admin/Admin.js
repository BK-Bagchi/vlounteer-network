import React, { useState } from 'react'
import './Admin.css'
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import Logo from '../../Resources/logos/Group1329.png'
import RegisterList from './RegisterList'
import AddEvent from './AddEvent'
import AddIcon from '@material-ui/icons/Add'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

const Admin = () => {
    const history = useHistory()
    const [color, setColor] = useState(['royalblue', 'black'])
    let { path, url } = useRouteMatch()
    const colorControl = (one, two) => setColor([one, two])

    return (
        <section className="row w-100 m-0 px-4 py-2 admin">
            <div className="col-3 p-0">
                <img className="w-100" src={Logo} alt="Logo" onClick={() => history.push('/')} />
                <ul className="p-3">
                    <Link to={`${url}/volunteerList`} onClick={() => colorControl('royalblue', 'black')}>
                        <li style={{ color: color[0] }}><PeopleAltIcon /> Volunteer register list</li>
                    </Link>
                    <Link to={`${url}/addEvent`} onClick={() => colorControl('black', 'royalblue')}>
                        <li style={{ color: color[1] }}><AddIcon /> Add Event</li>
                    </Link>
                </ul>
            </div>
            <div className="col-9 p-0">
                <Switch>
                    <Route path={`${path}/volunteerList`}>
                        <RegisterList />
                    </Route>
                    <Route path={`${path}/addEvent`}>
                        <AddEvent />
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default Admin;