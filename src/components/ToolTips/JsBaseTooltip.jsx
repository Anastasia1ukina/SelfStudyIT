import Markdown from "react-markdown";

const JsBaseToolTip = () => {
  const jsBasePost = `
  ## ✨ [Как подключить к странице, панель консоли в DevTools](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Типы данных, проверка типа и преобразование типов](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Арифметические и логические операторы](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Условия, тернарный оператор](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Методы чисел](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{jsBasePost}</Markdown>
  )
}

export default JsBaseToolTip;