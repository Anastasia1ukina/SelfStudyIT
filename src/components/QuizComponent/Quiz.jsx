import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const Quiz = () => {
  const [quizes, setQuizes] = useState([]);

  const getQuizes = async () => {
    const quizesSnapshot = await getDocs(collection(db, "quizes"));
    quizesSnapshot.forEach((doc) => {
      setQuizes([...quizes, doc.data()])
    });
  }

  useEffect(() => {
    getQuizes();
  }, [])

  useEffect(() => {
    console.log(quizes)
  }, [quizes])

  return (
    <h1>Quiz</h1>
  )
}