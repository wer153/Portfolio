import React from 'react'
import Carousel from 'react-elastic-carousel';

import {SliderContainer, SlideContainer} from './slider.styles'

import clothshop from '../../assets/clothe-shop.PNG'
import keeper from '../../assets/keeper.PNG'
import mastermind from '../../assets/mastermind.PNG'
import weatherapp from '../../assets/weatherapp.PNG'

const Slider = () => {
    const items = [
        {id: 1, title: 'clothshop', location:{clothshop}},
        {id: 2, title: 'keeper', location:{keeper}},
        {id: 3, title: 'mastermind', location:{mastermind}},
        {id: 4, title: 'weatherapp', location:{weatherapp}}
        // {id: 2, title: 'item #2', src={clotheshop}} ,
        // {id: 3, title: 'item #3', src={clotheshop}},
        // {id: 4, title: 'item #4', src={clothshop}}
    ]

    return (
        <SliderContainer>
            <Carousel>
                {/* {items.map(item=>(
                <SlideContainer key={item.id}>
                    {console.log(item)}
                    <img src={item.location} width='100%' height='100%'/>
                </SlideContainer>))} */}
                <SlideContainer><img src={clothshop} width='100%' height='100%'/></SlideContainer>
                <SlideContainer><img src={keeper} width="100%" height='100%'/></SlideContainer>
                <SlideContainer><img src={mastermind} width="100%" height='100%'/></SlideContainer>
                <SlideContainer><img src={weatherapp} width="100%" height='100%'/></SlideContainer>
            </Carousel>

        </SliderContainer>
    )

    
}

export default Slider