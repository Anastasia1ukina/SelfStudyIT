import React, { useState, useRef, useEffect } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { Box, Tooltip } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import homeMountain from "../../assets/mountain9.svg";
import { Quiz } from "../../components/QuizComponent/Quiz";
import { TooltipSection } from "../../components/TooltipSection/TooltipSection";
import HtmlToolTip from "../../components/ToolTips/HtmlTooltip";
import CssToolTip from "../../components/ToolTips/CssTooltip";
import DevToolsToolTip from "../../components/ToolTips/DevToolsTooltip";
import BemToolTip from "../../components/ToolTips/BemTooltip";
import ScssToolTip from "../../components/ToolTips/ScssTooltip";
import JsBaseToolTip from "../../components/ToolTips/JsBaseTooltip";
import JsBrowserToolTip from "../../components/ToolTips/JsBrowserTooltip";
import ProjectBuildersToolTip from "../../components/ToolTips/ProjectBuildersTooltip";
import NodeJsToolTip from "../../components/ToolTips/NodeJsTooltip";
import GitToolTip from "../../components/ToolTips/GitTooltip";
import ReactToolTip from "../../components/ToolTips/ReactTooltip";
import TypescriptToolTip from "../../components/ToolTips/TypescriptTooltip";
import DockerToolTip from "../../components/ToolTips/DockerTooltip";

const flagOffsets = [
  {id: 1, topOffSet: 0.6, rightOffSet: 0.87, type: "html", toolTipContent: <HtmlToolTip />, label: "1. HTML" },
  {id: 2, topOffSet: 0.5, rightOffSet: 0.75, type: "css", toolTipContent: <CssToolTip />, label: "2. CSS" },
  {id: 3, topOffSet: 0.4, rightOffSet: 0.6, fileName: "devtools.md", toolTipContent: <DevToolsToolTip />, label: "3. DevTools" },
  {id: 4, topOffSet: 0.25, rightOffSet: 0.5, fileName: "bem.md", toolTipContent: <BemToolTip />, label: "4. BEM" },
  {id: 5, topOffSet: 0.1, rightOffSet: 0.38, fileName: "scss.md", toolTipContent: <ScssToolTip />, label: "5. SCSS/PostCSS/Less" },
  {id: 6, topOffSet: 0.53, rightOffSet: 0.26, fileName: "jsbase.md", toolTipContent: <JsBaseToolTip />, label: "6. JavaScript BASE" },
  {id: 7, topOffSet: 0.45, rightOffSet: 0.13, fileName: "jsbrowser.md", toolTipContent: <JsBrowserToolTip />, label: "7. JavaScript BROWSER" },
  {id: 8, topOffSet: 0.25, rightOffSet: 0.23, fileName: "projectsbuilders.md", toolTipContent: <ProjectBuildersToolTip />, label: "8. Projects Builders" },
  {id: 9, topOffSet: 0.18, rightOffSet: 0.19, fileName: "nodejsnpm.md",  toolTipContent: <NodeJsToolTip />, label: "9. NodeJS npm" },
  {id: 10, topOffSet: 0.12, rightOffSet: 0.16, fileName: "git.md", toolTipContent: <GitToolTip />, label: "10. GIT" },
  {id: 11, topOffSet: 0.25, rightOffSet: 0.03, fileName: "react.md", toolTipContent: <ReactToolTip />, label: "11. React + Ecosystem" },
  {id: 12, topOffSet: 0.18, rightOffSet: 0.03, fileName: "typescript.md", toolTipContent: <TypescriptToolTip />, label: "12. TypeScript" },
  {id: 13, topOffSet: 0.1, rightOffSet: 0.015, fileName: "docker.md", toolTipContent: <DockerToolTip />, label: "13. Docker" },
  {id: 14, topOffSet: -0.08, rightOffSet: 0.015, fileName: "ssr.md", toolTipContent: <h1>hello</h1>, label: "14. SSR (NextJS)" },
]

export const HomePage = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const [quiz, setQuiz] = useState(null);

  const getQuiz = async () => {
    const quizSnapshot = await getDocs(collection(db, "quizes"));
    const quizData = quizSnapshot.docs.map(doc => doc.data());
    setQuiz(quizData[0]);
  }

  useEffect(() => {
    getQuiz();
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
      {quiz && <Quiz quiz={quiz} />}
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
