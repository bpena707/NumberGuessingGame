import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable
                    style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                    onPress={onPress}
                    android_ripple={{color: 'rgba(145,39,83,0.82)'}
                }>
                <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
    },

    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        marginHorizontal: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 28,
        margin: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})