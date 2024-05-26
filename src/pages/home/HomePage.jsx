import React, { useState, useRef, useEffect } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Typography, Button, Modal, Box, Radio, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { test } from "../../features/tests/FirstTest";
import homeMountain from "../../assets/mountain8.svg";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Quiz } from "../../components/QuizComponent/Quiz";

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
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const imgRef = useRef(null);
  const flags = [{topOffSet: 0.79, rightOffSet: 0.85}, {topOffSet: 0.6, rightOffSet: 0.75}];

  useEffect(() => {
    if (!imgRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      console.log(entries)
      const { width, height } = entries[0].contentRect;
      setTop(height * 0.79);
      setRight(width * 0.85);
    });
    resizeObserver.observe(imgRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <AuthLayout>
      <Quiz />
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "relative", 
        height: "auto"
      }}>
          <button style={{position: "absolute", top, right}}>HTML</button>
          {/* <button style={{position: "absolute", top, right}}>CSS</button> */}
          <img ref={imgRef} style={{ marginBottom: 0 }} width="95%" height="auto" src={homeMountain} alt="mountain" />
        {/* </div> */}
      </Box>
    </AuthLayout>
  );
};
