import React from 'react';
import { View } from 'react-native';
import { QuestionWrapper } from "./src/components";
import styles from "./App.styles";
import { QuizProvider } from "./src/contexts/QuizContext";
export default function App() {
  return (
    <View style={styles.container}>
      <QuizProvider>
        <QuestionWrapper />
      </QuizProvider>
    </View>
  );
}

