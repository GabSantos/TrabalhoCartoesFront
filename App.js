import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './src/components/Estilo'
import Quadrado from './src/Componentes_aula/FlexBox'

export default function App() {
  const [selectedValue, setSelectedValue] = useState("dobro");
  return (
    <View style={styles.container}>
      <Quadrado>
        
      </Quadrado>
    </View>
  );
}

