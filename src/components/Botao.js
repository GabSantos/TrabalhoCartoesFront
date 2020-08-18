import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './Estilo'

const Botao = (prop) =>{
    const [numero, setNumero] = useState(prop.inicial)

    function Dobra() {
        setNumero(numero * 2)        
    }

    return(
        <View style={styles.bot}>
            <TouchableOpacity
                style={styles.botao}
                onPress={Dobra}
            >
                <Text style={styles.text} >Dobrar</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Resposta: {numero}</Text>
        </View>
    );
}

export default Botao;