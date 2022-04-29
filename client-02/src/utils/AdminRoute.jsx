import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUtils } from '../hooks/useUtils'
import { useGetMe } from '../hooks/useGetMe'
import { CircularProgress } from '@mui/material'

const AdminRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useUtils()
    const { data, isLoading } = useGetMe()
    const user = data?.data?.data?.user
    const isAdmin = user?.role === 'admin'

    if (isLoading) return <CircularProgress />
    return (
        <Route
            exact
            {...rest}
            render={({ location, ...props }) => {
                if (!isAuthenticated) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'auth/login',
                                state: { from: location },
                            }}
                        />
                    )
                }
                if (isAuthenticated && !isAdmin) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/me',
                                state: { from: location },
                            }}
                        />
                    )
                }

                return <Component {...props} />
            }}
        />
    )
}
export default AdminRoute
