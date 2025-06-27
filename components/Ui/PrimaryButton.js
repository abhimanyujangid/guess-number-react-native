import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
},
  buttonText: {
    color: Colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
  },
});


export default PrimaryButton;