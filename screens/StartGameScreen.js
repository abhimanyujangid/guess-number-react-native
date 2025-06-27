import  {View, TextInput, Button, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState } from 'react';



function StartGameScreen({onPickNumber}) {
  const [enteredValue, setEnteredValue] = useState('');


  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText)
  };

  const onConfirmInput = () => {
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 99) {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid number between 1 and 99',
        [
          { text: 'Okay', style: 'destructive', onPress: () => setEnteredValue('') },
        ],
      );
      return;
    }
    onPickNumber(parsedValue);
    setEnteredValue(''); // Clear the input after confirmation
  }


  const resetInputHandler = () => {
    setEnteredValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
       maxLength={2}
       keyboardType='number-pad'
       autoCapitalize='none'
       value={enteredValue}
       onChangeText={text => numberInputHandler(text)}
       placeholder="Enter a number (1-99)"
        placeholderTextColor="#6c757d"
       />
      <View style={styles.buttonContainer}>
       <PrimaryButton
         children="Confirm"
         onPress={onConfirmInput}
       />
       <PrimaryButton
            children="Reset"
            onPress={resetInputHandler}
            />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    alignItems: 'center',       
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
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
    width: '100%',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

export default StartGameScreen;