import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Editor from '@monaco-editor/react'
import { value } from './editor_default_value.tsx'
import MarkdownRenderer from './MarkdownRenderer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Editor className="prose" height="90vh" defaultLanguage="markdown" defaultValue={value}/>
    <MarkdownRenderer defaultValue={value} />
  </StrictMode>,
)
