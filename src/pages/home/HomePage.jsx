import React, { useState, useEffect } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Typography, Button } from "@mui/material";
import { test } from "../../features/tests/FirstTest";

export const HomePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  const handleAnswer = (optionId) => {
    const currentQuestion = test.questions[currentQuestionIndex]

    test.answerQuestion({
      value: currentQuestion.options[optionId].value,
      id: currentQuestion.id,
      optionId: optionId,
    });

    const isCurrentIndexLessThanLast = currentQuestionIndex < test.questions.length - 1;

    if (isCurrentIndexLessThanLast) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    if (currentQuestionIndex === test.questions.length - 1) {
      setTestFinished(true)
    }
  };

  if (testFinished) {
    return (
      <AuthLayout>
        <Typography variant="h5">No more questions!</Typography>
      </AuthLayout>
    )
  }
  return (
    <AuthLayout>
      <Typography variant="h5">{test.questions[currentQuestionIndex].text}</Typography>
      {test.questions[currentQuestionIndex].options.map((option, index) => (
        <Button key={option.id} onClick={() => handleAnswer(index)}>
          {option.label}
        </Button>
      ))}
    </AuthLayout>
  );
};
