import React, { useState } from 'react';
import { View } from 'react-native';
import { MultiChoiceQuestion } from "./src/components";
import styles from "./App.styles";
import questions  from "./src/data/imageMulatipleChoiceQuestions";
export default function App() {
  return (
    <View style={styles.container}>
      <MultiChoiceQuestion questions={questions}/>
    </View>
  );
}

