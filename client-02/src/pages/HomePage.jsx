import React from 'react'
import { Container, CircularProgress } from '@mui/material'

import HowCanWeHelp from '../components/home/HowCanWeHelp'
import Tutorials from '../components/home/Tutorials'
import WhoAreWe from '../components/home/WhoAreWe'
import Header from '../components/home/Header'

import { useTutorials } from '../hooks/useTutorials'

const page = 1
const limit = 3
const HomePage = () => {
    const { data, errors, loading } = useTutorials(page, limit)
    const tutorials = data?.data?.data?.docs || []

    return (
        <>
            <Header />
            <Container>
                <Tutorials tutorials={tutorials} />
                <WhoAreWe />
                <HowCanWeHelp />
            </Container>
        </>
    )
}

export default HomePage
