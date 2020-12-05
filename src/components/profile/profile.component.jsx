import React from 'react';

import {ProfileContainer, TitleContainer, ContentContainer, CardContainer} from './profile.styles'
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
        </ProfileContainer>
        
    )
}
export default Profile
