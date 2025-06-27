import  {View, TextInput, Button} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';



function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
       maxLength={2}
       keyboardType='number-pad'
       autoCapitalize='none'
       />
      <View style={styles.buttonContainer}>
       <PrimaryButton
         children="Confirm"
         onPress={() => console.log('Button Pressed')}
       />
       <PrimaryButton
            children="Reset"
            onPress={() => console.log('Reset Pressed')}
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