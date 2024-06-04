import Markdown from "react-markdown";

const DevToolsToolTip = () => {
  const DevToolsPost = `
  ## ✨ [Вкладки Elements, Styles](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Вкладки Console, Sources, Network, Application](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{DevToolsPost}</Markdown>
  )
}

export default DevToolsToolTip;