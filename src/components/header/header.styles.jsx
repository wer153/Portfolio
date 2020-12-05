import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

const boldStyle = css`
    font-weight:bold
`

const headlineHeaderStyle = css`
    background-color: transparent;
    & div { color:black; }
    &:hover {
        background-color: black; 
        & div { color:white; }
    }
`
const getBoldStyle = props => {
    if (props.current) {
        return boldStyle
    }
}

const getHeadlineHeaderStyle = props => {
    console.log(props.current)
    if (props.current) {
        return headlineHeaderStyle
    }
}


export const HeaderContainer = styled.div`
    
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid black;
    justify-content: space-between;
    display: flex;
    background: black;
    z-index:5;

    ${getHeadlineHeaderStyle}
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: auto;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const OptionContainer = styled.div`
    text-decoration:none;
    color: white;

    ${getBoldStyle}
`
export const LinkContainer = styled(Link)`
    text-decoration:none;
    padding: 10px 15px;
    cursor: pointer;
`