import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    input: {
        height: 40,
        width: 150,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 25,
        paddingHorizontal: 19,
        margin: 10,
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        maxWidth: 300,
    },
    botao: {
        margin: 20,
        backgroundColor: '#fff',
        borderColor: '#f1f',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botoes: {
        height: 100,
        display: 'flex',
        flexDirection: 'row'
    },
})