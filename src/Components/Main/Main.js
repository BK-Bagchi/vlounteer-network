import React, { useState } from 'react'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Sign from '../Sign/Sign'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const GlobalData = React.createContext()
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({})
    console.log(loginInfo)
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
                        <Route path='/profile'>
                            <Profile />
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