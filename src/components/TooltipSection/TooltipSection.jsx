import React, { useEffect } from "react";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import stylesTooltipSection from "./TooltipSection.module.css";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

export const TooltipSection = ({ top, right, children, toolTipContent }) => {

  useEffect(() => {
  }, [toolTipContent])

  return (
    <CustomWidthTooltip title={toolTipContent} placement="top-start">
      <button style={{ position: "absolute", top, right }} className={stylesTooltipSection.tooltipBtn}>{children}</button>
    </CustomWidthTooltip>
  )
}