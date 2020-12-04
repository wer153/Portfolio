import React from 'react'

import { BoxContainer, TitleContainer } from './box.styles'

const Box = (props) => (
    <BoxContainer>
        <TitleContainer>{props.title}</TitleContainer>
        {console.log(props)}
    </BoxContainer>
)

export default Box