import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        color: 'blue',
        marginBottom: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 10,
        color: 'gray',
        width: '100%',
        fontSize: 20
    },
    btn: {
        backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    btntext: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 24
    }
});

export default styles;