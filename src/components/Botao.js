import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './Estilo'

const Botao = (prop) => {
    const operacao = prop.op

    return (
        <TouchableOpacity
            style={styles.botao}
        >
            <Text style={styles.text} >{operacao}</Text>
        </TouchableOpacity>
    );
}

export default Botao;