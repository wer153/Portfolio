import React from 'react'
import {PortfolioContainer} from './portfolio.styles'
import Slider from '../slider/slider.component'
import Projects from '../projects/projects.component'


const Portfolio = () => {
    return (
        <PortfolioContainer>
            <Projects/>
            
            <Slider/>
        </PortfolioContainer>
    )   
}

export default Portfolio