import React from 'react'

import { HeaderContainer, OptionContainer, LogoContainer } from './header.styles'

const Header = ({...props}) => (
    <HeaderContainer {...props}>
        <LogoContainer>LOGO</LogoContainer>
        <OptionContainer>About Me</OptionContainer>
        <OptionContainer>Projects</OptionContainer>
        <OptionContainer>Skills</OptionContainer>
        <OptionContainer>Contact</OptionContainer>
    </HeaderContainer>
    
    
)

export default Header