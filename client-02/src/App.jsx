import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import 'react-toastify/dist/ReactToastify.css'

import TopAppBar from './components/layouts/TopAppBar'
import AllTutorialsPage from './pages/AllTutorialsPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpPage from './pages/SignUpPage'
import TutorialDetailsPage from './pages/TutorialDetailsPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AddTutorialPage from './pages/AddTutorialPage'
import UpdateTutorialPage from './pages/UpdateTutorialPage'
import ProfilePage from './pages/ProfilePage'
import { ToastContainer } from 'react-toastify'
import Footer from './components/layouts/Footer'
import { UtilsProvider } from './contexts/UtilsContext'

import PublicRoute from './utils/PublicRoute'
import PrivateRoute from './utils/PrivateRoute'
import AdminRoute from './utils/AdminRoute'

const queryClient = new QueryClient()

const theme = createTheme({
    palette: {
        primary: {
            main: '#81B622',
            light: '#FFFFFF',
        },
        secondary: {
            main: '#006BA6',
        },
    },
})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UtilsProvider>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <BrowserRouter>
                        <TopAppBar />
                        <Switch>
                            <PublicRoute exact path="/" component={HomePage} />

                            <PrivateRoute
                                exact
                                path="/me"
                                component={ProfilePage}
                            />

                            <PublicRoute
                                exact
                                path="/learn"
                                component={LearnPage}
                            />

                            <PublicRoute
                                exact
                                path="/tutorials"
                                component={AllTutorialsPage}
                            />

                            <PublicRoute
                                exact
                                path="/tutorials/:tutorialId"
                                component={TutorialDetailsPage}
                            />

                            <PublicRoute
                                exact
                                restricted={true}
                                path="/auth/signup"
                                component={SignUpPage}
                            />

                            <PublicRoute
                                exact
                                restricted={true}
                                path="/auth/login"
                                component={LoginPage}
                            />

                            <PublicRoute
                                exact
                                restricted={true}
                                path="/auth/forgotPassword"
                                component={ForgotPasswordPage}
                            />

                            <PublicRoute
                                exact
                                restricted={true}
                                path="/auth/resetPassword/:resetToken"
                                component={ResetPasswordPage}
                            />

                            <AdminRoute
                                exact
                                path="/admin"
                                component={AdminDashboardPage}
                            />

                            <AdminRoute
                                exact
                                path="/admin/addTutorial"
                                component={AddTutorialPage}
                            />

                            <AdminRoute
                                exact
                                path="/admin/updateTutorial/:tutorialId"
                                component={UpdateTutorialPage}
                            />
                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </ThemeProvider>
            </UtilsProvider>
        </QueryClientProvider>
    )
}

export default App
