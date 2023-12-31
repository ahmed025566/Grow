import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar  } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'
import '../App.css'
 
const Editor = () => { 
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-main-bg rounded-3xl'>
      <Header title='Editor' category='App' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor