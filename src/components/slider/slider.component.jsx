import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'


import {SliderContainer, DivContainer} from './slider.styles'

import clotheshop from '../../assets/clothe-shop.PNG'
import keeper from '../../assets/keeper.PNG'
import mastermind from '../../assets/mastermind.PNG'
import weatherapp from '../../assets/weatherapp.PNG'

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <SliderContainer>
            <AutoplaySlider
                play={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <DivContainer data-src={clotheshop}/>  
                <DivContainer data-src={keeper}/>  
                <DivContainer data-src={mastermind}/>  
                <DivContainer data-src={weatherapp}/>  
            </AutoplaySlider>
        </SliderContainer>
    )

    
}

export default Slider