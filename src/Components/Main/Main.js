import React, { useState } from 'react'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Sign from '../Sign/Sign'
import Admin from '../Admin/Admin'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const GlobalData = React.createContext()
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({})
    if (loginInfo.isLoggedIn) sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo))

    return (
        <>
            <GlobalData.Provider value={{ login: [loginInfo, setLoginInfo] }}>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/sign'>
                            <Sign />
                        </Route>
                        <PrivateRoute path='/register'>
                            <Register />
                        </PrivateRoute>
                        <PrivateRoute path='/profile'>
                            <Profile />
                        </PrivateRoute>
                        <Route path='/admin'>
                            <Admin />
                        </Route>
                        <Route path='*'>
                            <Redirect push to='/' />
                        </Route>
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </>
    );
};

export default Main;