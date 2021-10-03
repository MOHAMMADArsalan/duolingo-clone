import React, { useState } from 'react';
import { View } from 'react-native';
import { MultiChoiseQuestion } from "./src/components";
import styles from "./App.styles";
import question  from "./src/data/oneQuestionWithOption";
export default function App() {
  const [ selected, setSelected ] = useState(null) 
  return (
    <View style={styles.container}>
      <MultiChoiseQuestion question={question} selected={selected} onSelect={setSelected}/>
    </View>
  );
}

