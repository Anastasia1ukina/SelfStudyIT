import Markdown from "react-markdown";

const ProjectBuildersToolTip = () => {
  const projectBuildersPost = `
  ## ✨ [Gulp](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [WebPack](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Vite](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{projectBuildersPost}</Markdown>
  )
}

export default ProjectBuildersToolTip;