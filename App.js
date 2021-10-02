import React from 'react';
import { View } from 'react-native';
import { MultiChoiseQuestion } from "./src/components";
import styles from "./App.styles";
export default function App() {
  return (
    <View style={styles.container}>
      <MultiChoiseQuestion />
    </View>
  );
}

