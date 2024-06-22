import React, { useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { QuizQuestion } from "./QuizQuestion";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import useAuth from "../../hooks/useAuth";

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
      return { ...formValues, [questionItem.id]: "" }
    }, {}),
  });

  const { user } = useAuth();
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

  const getQuizAnswers = async () => {
    const docRef = doc(db, "quizResults", quiz.id, user.uid, "xJi8rTvOlXLFvxd2yKSL");
    const docSnap = await getDoc(docRef);

    // const quizResultsRef = collection(db, "quizResults");
    // const docSnap = await getDoc(collection(quizResultsRef, quiz.id, user.uid));

    const querySnapshot = await getDocs(collection(db, "quizResults", quiz.id, user.uid));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    if (docSnap.exists()) {
      const documentData = docSnap.data();
      console.log("Document data:", documentData);
      return documentData;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getQuizAnswers()
  }, [])

  const handleSubmit = async (data) => {
    const quizResultsRef = collection(db, "quizResults");
    console.log(data, "submittest", user, quiz);
    await addDoc(collection(quizResultsRef, quiz.id, user.uid), {
      answers: data,
      userId: user.uid,
    });
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
          <Box sx={{ marginTop: "auto", flex: "0 0 auto", display: "flex", justifyContent: "space-between" }}>
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