import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },
    line: {
        borderBottomColor: "#D8d8d8",
        borderBottomWidth: 2,
    },

    rowBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },


});

export default styles