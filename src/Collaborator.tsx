import { Editor } from '@monaco-editor/react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import { defaultValue } from './editor_default_value.tsx'

export default function Collaborator(props) {
  const [value, setValue] = useState("" || defaultValue)

  function editorOnChange(value: string | undefined, event) {
    setValue(value ??= "")
  }

  return (
    <div className={props.className}>
      <div className="float-left w-1/2 h-full">
        <Editor
          className=""
          height="100%"
          width="100%"
          defaultLanguage="markdown"
          defaultValue={defaultValue}
          onChange={editorOnChange}
        />
      </div>
      <Markdown
        className="float-right overflow-y-scroll w-1/2 max-w-none h-full prose"
        remarkPlugins={[remarkGfm]}
      >
        {value}
      </Markdown>
    </div>
  )
}
