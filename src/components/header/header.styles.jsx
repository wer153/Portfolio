import styled, {css} from 'styled-components'

const visibleStyles = css`
    background: black;
    color: white;
`

const invisibleStyles = css`
    background: transparent;
`

const getVisibleStyles = (props) => {
    if (props.visible){
        return visibleStyles
    }else {
        return invisibleStyles
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

    z-index:5;
    ${getVisibleStyles}
`
export const LogoContainer = styled.div`
    height: 100%;
    width: 80%;
    padding: 25px;
`

export const OptionContainer = styled.div`
    position: relative;
    width: auto;
    height: 100%;
    display: flex;
    margin-right: 30px;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
`
