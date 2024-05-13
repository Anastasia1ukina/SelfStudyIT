import React, { useState } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Typography, Button, Modal, Box, Radio, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { test } from "../../features/tests/FirstTest";
import { BorderRight } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  textAlign: "center",
  borderRadius: 8
};

export const HomePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const allQuestions = test.questions.length;

  const handleAnswer = (event) => {
    const optionId = parseInt(event.target.value);
    setSelectedOption(optionId);
  };

  const handlePreviousQuestion = () => {
    const previousQuestion = test.questions[currentQuestionIndex - 1];
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOption(test.answers[previousQuestion.id].optionId)
  };

  const handleNextQuestion = () => {
    const currentQuestion = test.questions[currentQuestionIndex];
    const nextQuestion = test.questions[currentQuestionIndex + 1];
    test.answerQuestion({
      value: currentQuestion.options[selectedOption].value,
      id: currentQuestion.id,
      optionId: selectedOption,
    });

    if (currentQuestionIndex === test.questions.length - 1) {
      setTestFinished(true);
      const correctAnswers = test.getCorrectAnswersCount();
      setCorrectAnswersCount(correctAnswers);
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(test.answers[nextQuestion.id]?.optionId || null);
  };

  if (testFinished) {
    return (
      <AuthLayout>
        <Button onClick={handleOpen}>See result</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h5">No more questions!</Typography>
            <Typography variant="h5">Correct answers: {correctAnswersCount}/{allQuestions}</Typography>
          </Box>
        </Modal>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout>
      <Button onClick={handleOpen}>Get tested</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">{test.questions[currentQuestionIndex].text}</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={selectedOption} onChange={handleAnswer}>
              {test.questions[currentQuestionIndex].options.map((option, index) => (
                <FormControlLabel
                  key={option.id}
                  value={index.toString()}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Box>
            <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              BACK
            </Button>
            <Button onClick={handleNextQuestion} disabled={selectedOption === null}>
              NEXT
            </Button>
          </Box>
        </Box>
      </Modal>
    </AuthLayout>
  );
};
