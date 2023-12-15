import { StatusBar } from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./Screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    })

    if (!fontsLoaded){
        return <AppLoading />
    }

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }

    if (gameIsOver && userNumber){
        screen = <GameOverScreen  />
    }

    function gameOverHandler() {
        setGameIsOver(true)
    }

  return (
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
          <ImageBackground
              source={require('./assets/Images/background.png')}
              resizeMode="cover"
              style={styles.rootScreen}
              imageStyle={styles.backgroundImage}
          >
              <SafeAreaView style={styles.rootScreen}>
                  {screen}
              </SafeAreaView>

          </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
    backgroundImage: {
      opacity: 0.15,
    },

});




