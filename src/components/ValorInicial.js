import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import styles from './Estilo'

const ValorInicial = () => {
  const [value, onChangeText] = useState('0');

  return (
    <View style={styles.view}>
        <Text style={styles.text}>Valor inicial: 4</Text>
    </View>  
  );
}


export default ValorInicial;