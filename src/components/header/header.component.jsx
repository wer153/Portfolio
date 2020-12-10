import React from 'react'
import { HeaderContainer, OptionContainer, LogoContainer, OptionsContainer, LinkContainer } from './header.styles'
import { ReactComponent as Logo } from '../../assets/home.svg'
const Header = ({headline, aboutme, projects, skills, contact}) => {
    return(
          
    <HeaderContainer current={!aboutme && !skills}>
        {console.log(headline, aboutme, projects, skills, contact)}
        {/* <LogoContainer to='/'>
            {!headline && <Logo/>}
        </LogoContainer> */}
        <OptionsContainer>
            <LinkContainer  to='/'>
                <OptionContainer current={headline}>HOME</OptionContainer>
            </LinkContainer>
            <LinkContainer  to='/aboutme'>
                <OptionContainer current={aboutme}>ABOUT ME</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/projects'>
                <OptionContainer current={projects}>PROJECTS</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/skills'>
                <OptionContainer current={skills}>SKILLS</OptionContainer>
            </LinkContainer>
            <LinkContainer to='/contact'>
                <OptionContainer current={contact}>CONTACT</OptionContainer>
            </LinkContainer>
        </OptionsContainer>
    </HeaderContainer>
    )
}

export default Header