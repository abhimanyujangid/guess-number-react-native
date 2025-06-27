import { View, Text, StyleSheet } from 'react-native'; 
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.border,
        backgroundColor: Colors.backgroundSecondary || '#f9f9f9',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        // Elevation for Android
        elevation: 4,
    },
    number: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        fontFamily: 'System',
        letterSpacing: 2,
    },
});

export default NumberContainer;