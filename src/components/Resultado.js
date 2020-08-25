import React from 'react';
import { View, Text } from 'react-native';

import styles from './Estilo'

const Resultado = (prop) => {
  return <Text style={styles.text}>{prop.text}</Text>

}

export default Resultado;