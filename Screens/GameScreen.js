//component screen responsible for holding the game screen. where guesses are made and if the guess
//is too high or too low.

import {Text, View, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude){
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },


})