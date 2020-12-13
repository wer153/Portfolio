import React, {useState} from 'react'
import { ProjectsContainer, ProjectContainer } from './projects.styles'


const Projects = () => {
    const [hoverOn, setHoverOn] = useState(false)
    const handleMouseHover = () => setHoverOn(true)

    return (
    <ProjectsContainer>
        <ProjectContainer onMouseOver={handleMouseHover}>Clothe Shop</ProjectContainer>
        <ProjectContainer>Keeper</ProjectContainer>
        <ProjectContainer>Mastermind</ProjectContainer>
        <ProjectContainer>Weather App</ProjectContainer>
    </ProjectsContainer>)
}

export default Projects