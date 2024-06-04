import Markdown from "react-markdown";

const ReactToolTip = () => {
  const reactPost = `
  ## ✨ [Какие задачи решает](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Добавление в проект](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Синтаксис JSX: компоненты, элементы, вложенность](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Пропсы](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Условный рендеринг](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Преобразование массива в JSX через метод map](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Основные хуки: useState, useEffect, useRef, useMemo, useCallback](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [React Context API](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [React Portal API](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [react-query](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Стейт-менеджер: Redux, Redux-Toolkit, Zustand](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [react-router](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [axios](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Формы: react-hook-form и Yup](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [UI библиотеки: MaterialUI, AntDesign и др.](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Тестирование: Jest, react-testing-library](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{reactPost}</Markdown>
  )
}

export default ReactToolTip;