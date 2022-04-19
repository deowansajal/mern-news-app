import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUtils } from '../contexts/UtilsContext'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { isAuthenticated } = useUtils()

    return (
        <Route
            exact
            {...rest}
            render={({ location, ...props }) =>
                isAuthenticated && restricted ? (
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

export default PublicRoute
