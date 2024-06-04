import Markdown from "react-markdown";

const CssToolTip = () => {
  const cssPost = `
  ## ✨ [Анатомия CSS-правила](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Понятие селектора, свойства и значения](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Принцип каскада, специфичности, наследования](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Способы подключения стилей к странице](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Комбинирование селекторов друг с другом](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Блочная модель, внешние и внутренние отступы](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Схлопывание отступов](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Сброс и нормализация стилей](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Подключение шрифтов](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Свойства шрифтов: семейство, размер, начертание и др](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Позиционирование: статичное, относительное, абсолютное, фиксированное, sticky. Смещение по всем сторонам, z-index](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Рамки, обводки, закругления, тени и фильтры](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ## ✨ [Изображение и градиент на фон, параметры фона](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{cssPost}</Markdown>
  )
}

export default CssToolTip;