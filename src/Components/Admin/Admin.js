import React from 'react'
import './Admin.css'
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import Logo from '../../Resources/logos/Group1329.png'
import RegisterList from './RegisterList'
import AddEvent from './AddEvent'

const Admin = () => {
    const history = useHistory()
    let { path, url } = useRouteMatch()
    return (
        <section className="row w-100 m-0 px-4 py-2 admin">
            <div className="col-3 p-0">
                <img className="w-100" src={Logo} alt="Logo" onClick={() => history.push('/')} />
                <ul className="p-3">
                    <Link to={`${url}/volunteerList`}><li>Volunteer register list</li></Link>
                    <Link to={`${url}/addEvent`}><li>Add Event</li></Link>
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