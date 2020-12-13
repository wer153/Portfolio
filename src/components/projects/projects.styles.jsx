import { withTheme } from '@material-ui/core'
import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    /* flex:1; */
    
    width:50%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    font-weight: bold;
`

export const ProjectContainer = styled.p`
    color:gray;
    
    ${props=> (props.onMouseOver ? ()=>'color:white;':'color:gray;')}
`