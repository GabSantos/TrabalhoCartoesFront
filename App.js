import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from './src/components/Estilo'
import Botoes from './src/components/Botoes'

export default function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');



  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={val1}
        onChangeText={text => setVal1(text)}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={val2}
        onChangeText={text => setVal2(text)}
      />

      <Botoes val1={val1} val2={val2} />

    </View>
  );
}

