import React from 'react'
import {PortfolioContainer, SiderContainer} from './portfolio.styles'
import Slider from '../slider/slider.component'
import Projects from '../projects/projects.component'


const Portfolio = () => {
    return (
        <PortfolioContainer>
            <Projects/>
            {/* <SiderContainer>
                
            </SiderContainer> */}
            
            <Slider/>
        </PortfolioContainer>
    )   
}

export default Portfolio