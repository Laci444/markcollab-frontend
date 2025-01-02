import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useMemo, useState } from 'react'
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'
import MonacoEditor from './MonacoEditor.tsx'
import { useY } from 'react-yjs'

export default function Collaborator(props: { className: string | undefined }) {

  const ydoc = useMemo(() => new Y.Doc(), [])
  const ytext = useMemo(() => ydoc.getText("editor"), [])
  const value = useY(ytext)
  const [provider, setProvider] = useState<WebsocketProvider | null>(null)

  // this effect manages the lifetime of the Yjs document and the provider
  useEffect(() => {
    const provider = new WebsocketProvider(
      'wss://demos.yjs.dev/ws',
      'markcollab-v1',
      ydoc
    )
    setProvider(provider)
    return () => {
      provider?.destroy()
      ydoc.destroy()
    }
  }, [ydoc])

  return (
    <div className={props.className}>
      <div className="float-left w-1/2 h-full">
        <MonacoEditor ytext={ytext} wsProvider={provider!} />
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
