import Markdown from "react-markdown";

const ScssToolTip = () => {
  const scssPost = `
  ## ✨ [Интеграция в проект](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Основной функционал: вложенность селекторов, миксины, функции, циклы](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{scssPost}</Markdown>
  )
}

export default ScssToolTip;