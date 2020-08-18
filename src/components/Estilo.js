import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        backgroundColor: '#fff',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bot: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 150,
        alignItems: 'center',
    },
    view: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
    },
    botao: {
        marginBottom: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',

    },
})