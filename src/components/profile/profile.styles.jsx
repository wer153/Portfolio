import styled, {css} from 'styled-components'


const borderMaker = (props) => {
    if (props.border){
        return css`
            border: 1.5px solid ;
            width: 280px;
            height: 120px;
            margin: auto;
            margin-bottom: 50px;
            padding-top: 25px;
            vertical-align: middle;
            align-items: center;
        `
    }
}


export const ProfileContainer = styled.div` 
    display: block;
    width:100%;
    align-items:center;
    text-align:center;
    margin: 50px 0px;
`

export const CardContainer = styled.div` 
    display: inline-block;
    width:33%;
    align-items:center;
    text-align:center;
`

export const TitleContainer = styled.h1` 
    text-align:center;
    
`

export const ContentContainer = styled.p` 
    text-align:center;
    ${borderMaker}
`

