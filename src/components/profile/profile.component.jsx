import React from 'react';

import {ProfileContainer, TitleContainer, ContentContainer, CardContainer, BubbleContainer, BubbleThought} from './profile.styles'
import {strengths} from './strengths'
import './profile.styles'

const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileContainer>
                {strengths.map(strength => (
                    <CardContainer>
                        <TitleContainer>
                            {strength.title}
                        </TitleContainer>
                        <ContentContainer>
                            {strength.content}
                        </ContentContainer>
                    </CardContainer>
                ))}
            </ProfileContainer>  
            
            <BubbleContainer>
                <BubbleThought>Hello</BubbleThought>
            </BubbleContainer>
            

             
        </ProfileContainer>
        
    )
}
export default Profile
