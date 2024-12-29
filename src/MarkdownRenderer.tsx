import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownRenderer(props) {
  return <Markdown
    className="prose"
    remarkPlugins={[remarkGfm]}
  >
    {props.defaultValue}
  </Markdown>
}
