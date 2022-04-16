import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from './components/layouts/Footer'

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
import PublicRoute from './utils/PublicRoute'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminRoute from './utils/AdminRoute'
import AddTutorialPage from './pages/AddTutorialPage'
import UpdateTutorialPage from './pages/UpdateTutorialPage'
import ProfilePage from './pages/ProfilePage'

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
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                {<TopAppBar />}
                <Switch>
                    <PublicRoute exact path="/">
                        <HomePage />
                    </PublicRoute>
                    <PublicRoute path="/me">
                        <ProfilePage />
                    </PublicRoute>
                    <PublicRoute exact path="/learn">
                        <LearnPage />
                    </PublicRoute>
                    <PublicRoute exact path="/tutorials">
                        <AllTutorialsPage />
                    </PublicRoute>
                    <PublicRoute exact path="/tutorials/:tutorialId">
                        <TutorialDetailsPage />
                    </PublicRoute>
                    <PublicRoute exact path="/auth/signup">
                        <SignUpPage />
                    </PublicRoute>
                    <PublicRoute path="/auth/login">
                        <LoginPage />
                    </PublicRoute>

                    <PublicRoute exact path="/auth/forgotPassword">
                        <ForgotPasswordPage />
                    </PublicRoute>
                    <PublicRoute exact path="/auth/resetPassword">
                        <ResetPasswordPage />
                    </PublicRoute>
                    <AdminRoute exact path="/admin">
                        <AdminDashboardPage />
                    </AdminRoute>
                    <AdminRoute exact path="/admin/addTutorial">
                        <AddTutorialPage />
                    </AdminRoute>
                    <AdminRoute exact path="/admin/updateTutorial/:tutorialId">
                        <UpdateTutorialPage />
                    </AdminRoute>
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </ThemeProvider>
    )
}

export default App
