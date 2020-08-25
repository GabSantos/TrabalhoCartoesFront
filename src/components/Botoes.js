import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './Estilo'
import Resultado from './Resultado'

const Botoes = (props) => {
    const [resultado, setResultado] = useState('Resultado: ')

    function Soma() {
        setResultado("Resultado: " + (parseInt(props.val1) + parseInt(props.val2)))
    }

    function Subtracao() {
        setResultado("Resultado: " + (parseInt(props.val1) - parseInt(props.val2)))
    }

    function Multiplicacao() {
        setResultado("Resultado: " + (parseInt(props.val1) * parseInt(props.val2)))
    }

    function Divisao() {
        if (props.val2 == 0) {
            setResultado('Não é possível realizar divisão por 0')
        } else {
            setResultado("Resultado: " + parseInt(props.val1) / parseInt(props.val2))
        }
    }

    return (
        <View>
            <View style={styles.botoes}>
                <TouchableOpacity onPress={Soma} style={styles.botao}>
                    <Text style={styles.text} >+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Subtracao} style={styles.botao}>
                    <Text style={styles.text} >-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botoes}>
                <TouchableOpacity onPress={Multiplicacao} style={styles.botao}>
                    <Text style={styles.text} >*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Divisao} style={styles.botao}>
                    <Text style={styles.text} >/</Text>
                </TouchableOpacity>
            </View>
            <Resultado text={resultado} />
        </View>
    );
}

export default Botoes;