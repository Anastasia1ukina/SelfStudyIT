import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Typography, Button, Modal, Box, Radio, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { QuizQuestion } from "./QuizQuestion";

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

export const Quiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getQuiz = async () => {
    const quizSnapshot = await getDocs(collection(db, "quizes"));
    const quizData = quizSnapshot.docs.map(doc => doc.data());
    setQuiz(quizData[0]);
  }

  useEffect(() => {
    getQuiz();
  }, [])

  return (
    <div>
      <Button onClick={handleOpen}>Get tested</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {quiz?.questions?.map((quizQuestion) => (
            <QuizQuestion question={quizQuestion} key={quizQuestion.id} />
          ))}
          <Box sx={{ marginTop: "auto", flex: "0 0 auto" }}>
            <Button>BACK</Button>
            <Button>NEXT</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}