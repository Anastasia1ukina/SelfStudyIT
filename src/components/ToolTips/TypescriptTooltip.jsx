import Markdown from "react-markdown";

const TypescriptToolTip = () => {
  const typescriptPost = `
  ## ✨ [Зачем нужен](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Типы данных](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [type vs interface](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Типизация функций](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Утилитарные типы: Pick, Omit, Record, Exclude, Readonly](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Enums](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Приведение типов](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Types Guards](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Generic](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{typescriptPost}</Markdown>
  )
}

export default TypescriptToolTip;