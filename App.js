import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ValorInicial from './src/components/ValorInicial'
import styles from './src/components/Estilo'
import Botao from './src/components/Botao'
import Resultado from './src/components/Resultado'

export default function App() {
  const [selectedValue, setSelectedValue] = useState("dobro");
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ValorInicial />
      </View>
      <View style={styles.bot}>
        <Botao inicial={4} />
        <Resultado />
      </View>
    </View>
  );
}

