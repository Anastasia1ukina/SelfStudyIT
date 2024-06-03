import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import Markdown from "react-markdown";
import stylesTooltipSection from "./TooltipSection.module.css";
import htmlMdPath from "../../../assets/html.md";
import cssMdPath from "../../../assets/css.md";

export const TooltipSection = ({ type, top, right, children, toolTipContent }) => {
  // const [post, setPost] = useState('');
  // const filePathes = {
  //   html: htmlMdPath,
  //   css: cssMdPath
  // }

  // useEffect(() => {
  //   // import(`../../../../assets/${fileName}?raw /* @vite-ignore */`)
  //   //   .then(res => {
  //   //     console.log(res)
  //   //     fetch(res.default)
  //   //       .then(res => res.text())
  //   //       .then(res => setPost(res))
  //   //       .catch(err => console.log(err));
  //   //   })
  //   //   .catch(err => console.log(err));

  //   fetch(filePathes[type])
  //     .then((response) => response.text())
  //     .then((text) => setPost(text))
  // });

  useEffect(() => {
    console.log({toolTipContent}, "hey")
  }, [toolTipContent])

  return (
    <Tooltip title={toolTipContent} placement="top-start">
      <button style={{ position: "absolute", top, right }} className={stylesTooltipSection.tooltipBtn}>{children}</button>
    </Tooltip>
  )
}