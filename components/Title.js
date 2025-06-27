import { Text, StyleSheet } from 'react-native'; 
import Colors from '../constants/colors';

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}


export default Title;




const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginBottom: 16,
        borderWidth: 2,
        padding: 8,
        borderColor: Colors.border,
        borderRadius: 8,
        textAlign: 'center',
    }
});


