import React from 'react'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Sign from '../Sign/Sign'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/sign'>
                        <Sign />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='*'>
                        <Redirect push to='/' />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default Main;