import React, { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppTwitter } from './TwitterFollowCard.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
// React va a renderizar siempre un unico elemento, podremos usar un componente de React como si fuera un elemento HTML
// root.render(
 
//   <>
//     <AppRoot></AppRoot>
//   </>

// )
root.render(
 
    <>
    <div className='App'>
      <AppTwitter name={"Johan"} userName={"Johan"}/>
      <AppTwitter name={"Sabroso ois"} userName={"Juan"}/>
      <AppTwitter name={"Maria"} userName={"Pedro"}/>
    </div>
    </>
  
  )