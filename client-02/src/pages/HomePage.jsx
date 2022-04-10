import Container from '@mui/material/Container'
import React from 'react'
import HowCanWeHelp from '../components/home/HowCanWeHelp'
import Tutorials from '../components/home/Tutorials'
import WhoAreWe from '../components/home/WhoAreWe'
import Header from '../components/home/Header'
import { tutorials } from '../data/tutorials'

const HomePage = () => {
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
