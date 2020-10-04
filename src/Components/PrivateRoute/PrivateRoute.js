import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginInfo.isLoggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/sign",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;