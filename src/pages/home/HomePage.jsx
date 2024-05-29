import React, { useState, useRef, useEffect } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Box, Tooltip } from "@mui/material";
import homeMountain from "../../assets/mountain8.svg";
import { Quiz } from "../../components/QuizComponent/Quiz";
import { TooltipSection } from "../../components/TooltipSection/TooltipSection";

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
  const [topCss, setTopCss] = useState(0);
  const [right, setRight] = useState(0);
  const [rightCss, setRightCss] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const imgRef = useRef(null);
  const flags = [{ topOffSet: 0.6, rightOffSet: 0.87 }, { topOffSet: 0.6, rightOffSet: 0.75 }];

  useEffect(() => {
    if (!imgRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      const { width: currentWidth , height: currentHeight } = entries[0].contentRect;
      setWidth(currentWidth)
      setHeight(currentHeight)
      setTop(height * flags[0].topOffSet);
      setRight(width * flags[0].rightOffSet);
      setTopCss(height * flags[1].topOffSet);
      setRightCss(width * flags[1].rightOffSet);
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
        <TooltipSection fileName={"html.md"} top={top} right={right}>HTML</TooltipSection>
        <TooltipSection fileName={"html.md"} top={topCss} right={rightCss}>CSS</TooltipSection>
        <img ref={imgRef} style={{ marginBottom: 0 }} width="95%" height="auto" src={homeMountain} alt="mountain" />
      </Box>
    </AuthLayout>
  );
};
