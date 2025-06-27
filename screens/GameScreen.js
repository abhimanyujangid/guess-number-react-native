import React, { useState, useRef, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../components/Ui/Title';
import Colors from '../constants/colors';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/Ui/PrimaryButton';

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

function GameScreen({ userNumber = 0, onGameOver }) {
    const minBound = useRef(1);
    const maxBound = useRef(100);

    const [currentGuess, setCurrentGuess] = useState(() =>
        generateRandomNumber(1, 100, userNumber)
    );

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBound.current = 1;
        maxBound.current = 100;
    }, [userNumber]);

    const nextGuessHandler = (direction) => {
        // Validate the user's input
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBound.current = currentGuess - 1;
        } else {
            minBound.current = currentGuess + 1;
        }
        const newRndNumber = generateRandomNumber(
            minBound.current,
            maxBound.current,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    };

    return (
        <View style={styles.screen}>
            <Title>{"Opponent's Guess"}</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>Lower -</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('higher')}>Higher +</PrimaryButton>
                </View>
            </View>
            <View>
                LOG ROUND
            </View>
        </View>
    );
}

export default GameScreen;

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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});