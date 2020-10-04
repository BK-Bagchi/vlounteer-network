import React, { useContext } from 'react'
import './Home.css'
import Logo from '../../Resources/logos/Group1329.png'
import { Link, useHistory } from 'react-router-dom'
import { GlobalData } from '../Main/Main';

const Navbar = () => {
    const history = useHistory()
    const loginInfo = useContext(GlobalData).login[0]
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <img className="logo" src={Logo} alt="Logo" onClick={() => history.push('/')} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <Link to="/" className="d-flex"><li className="nav-link" >Home </li></Link>
                    <li className="nav-link" >Donation </li>
                    <li className="nav-link" >Events </li>
                    <li className="nav-link" >Blogs </li>
                    <li className="nav-link" >
                        {
                            loginInfo.isLoggedIn ?
                                <Link to='/profile'>{loginInfo.displayName}</Link> :
                                <button className="register" onClick={() => history.push('/sign')}>Login</button>
                        }

                    </li>
                    <li className="nav-link" >
                        <button className="admin" onClick={() => history.push('/admin/volunteerList')}>Admin</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;