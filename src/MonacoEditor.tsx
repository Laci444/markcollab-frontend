import { Editor } from '@monaco-editor/react'
import { useEffect, useState } from 'react'
import { MonacoBinding } from 'y-monaco'
import { WebsocketProvider } from 'y-websocket'
import { Text } from 'yjs'

export default function MonacoEditor(props: { wsProvider: WebsocketProvider; ytext: Text }) {

  const [editor, setEditor] = useState<any | null>(null)
  const [, setBinding] = useState<MonacoBinding | null>(null)

  // this effect manages the lifetime of the editor binding
  useEffect(() => {
    if (props.wsProvider == null || editor == null) {
      return
    }
    console.log('reached', props.wsProvider)
    const binding = new MonacoBinding(props.ytext, editor.getModel()!, new Set([editor]), props.wsProvider?.awareness)
    setBinding(binding)
    return () => {
      binding.destroy()
    }
  }, [props.ytext, props.wsProvider, editor])


  return <Editor
    className=""
    height="100%"
    width="100%"
    defaultLanguage="markdown"
    onMount={editor => { setEditor(editor) }}
    options={{
      "smoothScrolling": true,
      "cursorSmoothCaretAnimation": "on",
      "fontLigatures": true,
      "overviewRulerBorder": false,
      "glyphMargin": false,
      "minimap": {
        "autohide": true
      }
    }}
  />

}
