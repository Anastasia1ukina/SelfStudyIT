import Markdown from "react-markdown";

const BemToolTip = () => {
  const bemPost = `
  ## ✨ [Нейминг](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Компонентный подход](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{bemPost}</Markdown>
  )
}

export default BemToolTip;