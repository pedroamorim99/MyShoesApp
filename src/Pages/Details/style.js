import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#FFF",
    },
    image: {
        width: '100%',
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: "2%",
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '4.5%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
});

export default styles