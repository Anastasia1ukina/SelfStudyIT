import Markdown from "react-markdown";

const DockerToolTip = () => {
  const dockerPost = `
  ## ✨ [Синтаксис языка, анатомия тега](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{dockerPost}</Markdown>
  )
}

export default DockerToolTip;