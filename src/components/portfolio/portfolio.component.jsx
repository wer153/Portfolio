import React from 'react'
import {PortfolioContainer, MenuContainer} from './portfolio.styles'
import Slider from '../slider/slider.component'
import Projects from '../projects/projects.component'


const Portfolio = () => {
    return (
        <PortfolioContainer>
            {/* <img src='Background'/> */}
            <Projects/>
            <Slider/>
        </PortfolioContainer>
    )   
}

export default Portfolio