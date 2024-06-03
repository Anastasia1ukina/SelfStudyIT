import htmlMdPath from "../../../assets/html.md";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

const HtmlToolTip = () => {
  // const [post, setPost] = useState('');
  const htmlPost = `## hello html

  [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  
  "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.`

  // useEffect(() => {
  //   console.log(post, "sos")
  // }, [post]);

  // useEffect(() => {
  //   fetch(htmlMdPath)
  //     .then((response) => response.text())
  //     .then((text) => setPost(text))
  // }, []);

  return (
    <Markdown>{htmlPost}</Markdown>
  )
}

export default HtmlToolTip;