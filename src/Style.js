import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#202020'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#D8D9DB'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 24,
        color: '#202020',
        fontFamily: 'Helvetica'
    },
inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
inputButtonColor: {
    color: 'white',
},
    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
});
export default Style;