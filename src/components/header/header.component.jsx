import React from 'react'
import { HeaderContainer, OptionContainer, OptionsContainer, LinkContainer } from './header.styles'
const Header = ({headline, aboutme, projects, skills, contact}) => {
    return(
          
    <HeaderContainer current={!aboutme && !skills}>
        <OptionsContainer>
            <LinkContainer  to='/'>
                <OptionContainer current={headline}>HOME</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/projects'>
                <OptionContainer current={projects}>PROJECTS</OptionContainer>
            </LinkContainer>
            <LinkContainer  to='/aboutme'>
                <OptionContainer current={aboutme}>ABOUT</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/contact'>
                <OptionContainer current={contact}>CONTACT</OptionContainer>
            </LinkContainer>
        </OptionsContainer>
    </HeaderContainer>
    )
}

export default Header