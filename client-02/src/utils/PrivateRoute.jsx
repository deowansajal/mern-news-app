import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUtils } from '../hooks/useUtils'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useUtils()

    return (
        <Route
            exact
            {...rest}
            render={({ location, ...props }) =>
                !isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
}

export default PrivateRoute
