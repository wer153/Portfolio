import React from 'react'
import videofile from '../../assets/seoulcity.mp4'
import Typical from 'react-typical'
import {HeadlineContainer, TypicalContainer} from './headline.styles'

const Headline = () => {
    const textKOR = '안녕하세요, 저는 웹 개발자 김민기입니다. '
    const textENG = 'Hello, I am Kim Minki, Web developer. '

    return (
        <HeadlineContainer>
            <div className='video'>
                <video className='videoTag' autoPlay loop width='100%' height='10%' muted>
                <source src={videofile} type='video/mp4' />
                </video>
            </div>
            <TypicalContainer>
                <Typical 
                    steps={[textKOR, 3000, textENG, 3000]}
                    loop={Infinity}
                    wrapper='h1'
                />
            </TypicalContainer>
        </HeadlineContainer>
    )
}

export default Headline