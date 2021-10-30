import React, { useState } from 'react';
import { View } from 'react-native';
import { QuestionWrapper, OpenEndedQuestion } from "./src/components";
import styles from "./App.styles";
// import questions  from "./src/data/imageMulatipleChoiceQuestions";
import questions from "./src/data/allQuestions";

export default function App() {
  return (
    <View style={styles.container}>
      <QuestionWrapper questions={questions} />
    </View>
  );
}

