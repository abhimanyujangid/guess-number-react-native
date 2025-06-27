import  {View, TextInput, Button} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';



function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput />
       <PrimaryButton
         children="Confirm"
         onPress={() => console.log('Button Pressed')}
       />
       <PrimaryButton
            children="Reset"
            onPress={() => console.log('Reset Pressed')}
            />
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
});

export default StartGameScreen;