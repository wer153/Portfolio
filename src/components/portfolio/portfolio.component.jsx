import React from 'react'
import {PortfolioContainer} from './portfolio.styles'
import Slider from '../slider/slider.component'
import Box from '../box/box.component'
import Projects from '../projects/projects.component'

const Portfolio = () => {
    return (
        <PortfolioContainer>
            <Box title='Projects'/>
            <Slider/>
            <Projects/>
        </PortfolioContainer>
    )   
}

export default Portfolio