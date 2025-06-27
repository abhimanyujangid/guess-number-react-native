import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Title from '../components/Title';
import Colors from '../constants/colors';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"} />
            GUESS
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