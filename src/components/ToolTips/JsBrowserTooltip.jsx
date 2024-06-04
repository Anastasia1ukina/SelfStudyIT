import Markdown from "react-markdown";

const JsBrowserToolTip = () => {
  const jsBrowserPost = `
  ## ✨ [BOM (Browser Object Model) и DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Поиск элементов в DOM](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Получение значений свойств и атрибутов у элемента](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Добавление, удаление и изменение элементов в DOM-дереве](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [События в браузере: click, input, keyup, scroll, resize и т. д.](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Добавление и удаление событий к элементам](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Всплытие и погружение событий](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Генерация пользовательских событий](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [FormData API](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [fetch](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Хранение данных в браузере (Cookie, LocalStorage, SessionStorage, IndexDB)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [History API](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{jsBrowserPost}</Markdown>
  )
}

export default JsBrowserToolTip;