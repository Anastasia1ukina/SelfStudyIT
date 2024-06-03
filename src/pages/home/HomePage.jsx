import React, { useState, useRef, useEffect } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Box, Tooltip } from "@mui/material";
import homeMountain from "../../assets/mountain9.svg";
import { Quiz } from "../../components/QuizComponent/Quiz";
import { TooltipSection } from "../../components/TooltipSection/TooltipSection";
import HtmlToolTip from "../../components/ToolTips/HtmlTooltip";

const flagOffsets = [
  {id: 1, topOffSet: 0.6, rightOffSet: 0.87, type: "html", toolTipContent: <HtmlToolTip />, label: "HTML" },
  {id: 2, topOffSet: 0.5, rightOffSet: 0.75, type: "css", toolTipContent: <h1>hello</h1>, label: "CSS" },
  {id: 3, topOffSet: 0.4, rightOffSet: 0.65, fileName: "devtools.md", toolTipContent: <h1>hello</h1>, label: "DevTools" },
  {id: 4, topOffSet: 0.25, rightOffSet: 0.5, fileName: "bem.md", toolTipContent: <h1>hello</h1>, label: "BEM" },
  {id: 5, topOffSet: 0.1, rightOffSet: 0.38, fileName: "scss.md", toolTipContent: <h1>hello</h1>, label: "SCSS/PostCSS/Less" },
  {id: 6, topOffSet: 0.5, rightOffSet: 0.29, fileName: "jsbase.md", toolTipContent: <h1>hello</h1>, label: "JavaScript BASE" },
  {id: 7, topOffSet: 0.45, rightOffSet: 0.16, fileName: "jsbrowser.md", toolTipContent: <h1>hello</h1>, label: "JavaScript BROWSER" },
  {id: 8, topOffSet: 0.25, rightOffSet: 0.23, fileName: "projectsbuilders.md", toolTipContent: <h1>hello</h1>, label: "Projects Builders" },
  {id: 9, topOffSet: 0.18, rightOffSet: 0.19, fileName: "nodejsnpm.md",  toolTipContent: <h1>hello</h1>, label: "NodeJS npm" },
  {id: 10, topOffSet: 0.12, rightOffSet: 0.16, fileName: "git.md", toolTipContent: <h1>hello</h1>, label: "GIT" },
  {id: 11, topOffSet: 0.25, rightOffSet: 0.03, fileName: "react.md", toolTipContent: <h1>hello</h1>, label: "React + Ecosystem" },
  {id: 12, topOffSet: 0.18, rightOffSet: 0.03, fileName: "typescript.md", toolTipContent: <h1>hello</h1>, label: "TypeScript" },
  {id: 13, topOffSet: 0.1, rightOffSet: 0.015, fileName: "docker.md", toolTipContent: <h1>hello</h1>, label: "Docker" },
  {id: 14, topOffSet: -0.08, rightOffSet: 0.015, fileName: "ssr.md", toolTipContent: <h1>hello</h1>, label: "SSR (NextJS)" },
]

export const HomePage = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const updateDimensions = () => {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };

    const resizeObserver = new ResizeObserver(() => updateDimensions());
    resizeObserver.observe(imgRef.current);

    updateDimensions();

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
        {flagOffsets.map((flag) => (
          <TooltipSection
            key={flag.id}
            fileName={flag.fileName}
            toolTipContent={flag.toolTipContent}
            top={dimensions.height * flag.topOffSet}
            right={dimensions.width * flag.rightOffSet}
          >
            {flag.label}
          </TooltipSection>
        ))}
        <img ref={imgRef} style={{ marginBottom: 0 }} width="95%" height="auto" src={homeMountain} alt="mountain" />
      </Box>
    </AuthLayout>
  );
};
