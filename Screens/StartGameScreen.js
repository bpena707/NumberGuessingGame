//holds the component that acts as the start screen for the game. pick the number that should be guessed.
//starts the game

import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCorrect={false}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        )
}
export default StartGameScreen;

const styles = StyleSheet.create({

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    textInput: {
        height: 40,
        fontSize: 32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        fontWeight: 'bold',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
},);