import Markdown from "react-markdown";

const NodeJsToolTip = () => {
  const nodeJsPost = `
  ## ✨ [Синтаксис языка](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{nodeJsPost}</Markdown>
  )
}

export default NodeJsToolTip;