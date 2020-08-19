import React from 'react'
import {View} from 'react-native'

const Quadrado = (props) => {
    const lado = 50
    return (
        <View style={{
            height:lado * props.size, 
            width:lado * props.size, 
            backgroundColor: props.cor || '#000',
            marginHorizontal: 12
        }}>
        </View>
    );
}

export default Quadrado