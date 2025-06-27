// App.js
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState("");

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={['#f8f9fa', '#a1c4fd']}
        style={styles.rootOuterContainer}
      >
        <ImageBackground 
        source={require('./assets/image/back.jpg')}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={{ opacity: 0.5 }}>
          <SafeAreaView style={styles.rootContainer}>
           {
            screen
           }
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootOuterContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
