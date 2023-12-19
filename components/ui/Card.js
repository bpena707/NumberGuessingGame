import {View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return(
    <View style={styles.card}>
        {children}

    </View>
    )



}

const cardWidth = Dimensions.get('window').width;

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: cardWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },

})