//shows once the game is over.

import {View, Text, Image, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/Images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
            <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
        </View>
    )

}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%',
    },
summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
})