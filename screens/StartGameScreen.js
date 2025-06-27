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
    flex: 1,
    padding: 24,
    alignItems: 'center',       
    justifyContent: 'center',
    },  
});

export default StartGameScreen;