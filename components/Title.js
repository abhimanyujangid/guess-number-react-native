import { Text, StyleSheet } from 'react-native'; 

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
        color: '#343a40',
        marginBottom: 16,
        borderWidth: 2,
        padding: 8,
        borderColor: '#ced4da',
        borderRadius: 8,
        textAlign: 'center',
    }
});


