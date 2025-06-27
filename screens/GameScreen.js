import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Title from '../components/Ui/Title';
import Colors from '../constants/colors';
import NumberContainer from '../components/Game/NumberContainer';


function generateRandomNumber(min, max, exclude ) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}



function GameScreen({userNumber, onGameOver}) {

    // State to hold the current guess of the opponent
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const  [ currentGuess, setCurrentGuess ] = useState(initialGuess);


    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"} />
          <NumberContainer
          children={currentGuess}
            />
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <Text>+</Text>
                    <Text>-</Text>
                </View>
            </View>
            <View>
                LOG ROUND
            </View>
        </View>
    )
}

export default GameScreen


const styles = StyleSheet.create({
    screen: {
        padding: 12,
        backgroundColor: Colors.background,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        }
});