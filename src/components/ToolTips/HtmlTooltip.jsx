import Markdown from "react-markdown";

const HtmlToolTip = () => {
  const htmlPost = `
  ## ✨ [Синтаксис языка, анатомия тега](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Концепции потока документа](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Теги и атрибуты](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Семантика](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Доступность (Accessibility)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{htmlPost}</Markdown>
  )
}

export default HtmlToolTip;