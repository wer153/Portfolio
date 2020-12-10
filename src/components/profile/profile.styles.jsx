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

export const BubbleContainer = styled.p`
    position: relative;
	width: 300px;
	text-align: center;
	line-height: 1.4em;
	margin: 40px auto;
	background-color: #fff;
	border: 8px solid #333;
	border-radius: 30px;
	font-family: sans-serif;
	padding: 20px;
	font-size: large;

    &:before,&:after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
    }


`

export const BubbleThought = styled.p`

    width: 300px;
	border-radius: 200px;
	padding: 30px;	


    &:before,&:after {
        left: 10px;
        bottom: -30px;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border: 8px solid #333;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        border-radius: 28px;
    }
    
    &:before{
        width:44px;
        height:44px;
        top:-12px;
        left:28px;
        box-shadow:-50px 30px 0 -12px #fff;
    }

    &:after {
        width: 20px;
        height: 20px;
        left: 5px;
        bottom: -40px;
        -webkit-border-radius: 18px;
        -moz-border-radius: 18px;
        border-radius: 18px;
    }
`