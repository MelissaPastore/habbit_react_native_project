import React from 'react';

import AboutComponent from '../components/AboutComponent';

const AboutScreen = (props) => {
    return ( 
        <Scroll contentContainerStyle={
            {justifyContent: 'center', 
            alignItems: 'center',
            paddingBottom: 50}}>
            <AboutComponent />  
            <ButtonContainer
                onPress={() => props.navigation.navigate('Create')}>
            <ButtonText>
                Create New Pet
            </ButtonText>
            </ButtonContainer>
        </Scroll>
     );
}
 
export default AboutScreen;