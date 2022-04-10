import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from './components/layouts/Footer'

import TopAppBar from './components/layouts/TopAppBar'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpPage from './pages/SignUpPage'
import TutorialDetailsPage from './pages/TutorialDetailsPage'

const theme = createTheme({
    palette: {
        primary: {
            main: '#81B622',
            light: '#FFF',
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
            <TopAppBar />

            {/* <LearnPage /> */}
            {/* <HomePage /> */}
            {/* <LoginPage /> */}
            {/* <SignUpPage /> */}
            {/* <ForgotPasswordPage /> */}
            {/* <ResetPasswordPage /> */}
            <TutorialDetailsPage />
            <Footer />
        </ThemeProvider>
    )
}

export default App
