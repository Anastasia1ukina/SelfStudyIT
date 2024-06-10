import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { QuizQuestion } from "./QuizQuestion";
import { useForm } from "react-hook-form";

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
  display: "flex",
  flexDirection: "column",
  borderRadius: 8
};

export const Quiz = ({ quiz }) => {
  const form = useForm({
    defaultValues: quiz?.questions?.reduce((formValues, questionItem) => {
      return {...formValues, [questionItem.id]: ""}
    }, {}) ,
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  const handleSubmit = (data) => {
    console.log(data, "submittest");
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Button onClick={handleOpen}>Get tested</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <QuizQuestion control={form.control} question={quiz?.questions[currentQuestionIndex]} />
          <Box sx={{ marginTop: "auto", flex: "0 0 auto" }}>
            <Box>
              <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>BACK</Button>
              <Button onClick={handleNextQuestion} disabled={quiz?.questions?.length - 1 === currentQuestionIndex}>NEXT</Button>
            </Box>
            <Button onClick={form.handleSubmit(handleSubmit)} type="submit">FINISH</Button>
          </Box>
        </Box>
      </Modal>
    </form>
  )
}