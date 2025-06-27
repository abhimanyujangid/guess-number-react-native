import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/Ui/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen ({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}


export default GameOverScreen;



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',       
    justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: Colors.primary500,
        },
    summaryText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
        color: Colors.primary700,
        },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500,
        },
    });
    