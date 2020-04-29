import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const AboutComponent = () => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
                    Welcome to {'\n'}{'\n'}HABBIT.
                </Text>
                <Text style={styles.text}>
                    {'\n'}{'\n'}
                    Habbit is an interactive mobile game inspired by the legendary Tamagotchi, featuring a pet character that can grow and react based on user action and input. 
                    {'\n'}{'\n'}
                    Habbit’s aim is to promote healthy habits such as exercise, by making the pet’s growth and success dependent on your step count. 
                    {'\n'}{'\n'}
                    According to the American Council on Exercise, people who track their steps take an average of 2,500 more steps per day than those who don’t. 
                    {'\n'}{'\n'}
                    If you’re one of the millions who participate in a quest to hit the commonly recommended 10,000 steps-a-day goal, your efforts won’t go unrewarded. 
                    {'\n'}{'\n'}
                    Regular activity, including walking, offers a number of health benefits, including a reduced risk of: 
                    {'\n'}{'\n'}
                    - Heart disease and stroke 
                    {'\n'}{'\n'}
                    - High blood pressure 
                    {'\n'}{'\n'}
                    - Diabetes 
                    {'\n'}{'\n'}
                    - Obesity 
                    {'\n'}{'\n'}
                    - Depression 
                    {'\n'}{'\n'}
                    - Certain cancers, including breast and colon cancer
                </Text>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        marginHorizontal: 20,
        marginTop: 70,
    },
    text: {
        fontSize: 20,
        textAlign: 'justify',
        marginHorizontal: 35,
    }
})
 
export default AboutComponent;