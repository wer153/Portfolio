import React from 'react'
import { HeaderContainer, OptionContainer, LogoContainer, OptionsContainer, LinkContainer } from './header.styles'
import { ReactComponent as Logo } from '../../assets/home.svg'
const Header = ({headline, aboutme, projects, skills, contact}) => {
    return(
          
    <HeaderContainer current={headline}>
        {console.log(headline, aboutme, projects, skills, contact)}
        <LogoContainer to='/'>
            {!headline && <Logo/>}
        </LogoContainer>
        <OptionsContainer>
            <LinkContainer  to='/aboutme'>
                <OptionContainer current={aboutme}>About Me</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/projects'>
                <OptionContainer current={projects}>Projects</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/skills'>
                <OptionContainer current={skills}>Skills</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/contact'>
                <OptionContainer current={contact}>Contact</OptionContainer>
            </LinkContainer>
        </OptionsContainer>
    </HeaderContainer>
    )
}

export default Header