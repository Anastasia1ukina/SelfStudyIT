import Markdown from "react-markdown";

const GitToolTip = () => {
  const gitPost = `
  ## ✨ [clone, status, add, commit, reset, push, pull, branch, checkout, merge](https://developer.mozilla.org/en-US/docs/Web/HTML)
  `

  return (
    <Markdown>{gitPost}</Markdown>
  )
}

export default GitToolTip;