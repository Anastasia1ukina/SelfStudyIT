import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import Markdown from "react-markdown";

export const TooltipSection = ({ fileName, top, right, children }) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../../../../assets/${fileName}?raw /* @vite-ignore */`)
      .then(res => {
        console.log(res)
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });

  return (
    <Tooltip title={<Markdown>{post}</Markdown>} placement="top-start">
      <button style={{ position: "absolute", top, right }}>{children}</button>
    </Tooltip>
  )
}