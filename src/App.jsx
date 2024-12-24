import { useState } from 'react'
import './App.css'
import Collapse from './Collapse'
import data from '../data.js'
import Generator from './Generator.jsx'

function App() {
  return (
    <div className='left-file-wrapper'>
      {/* {data.map((item, idx) => {
        if (item.type === "folder") {
          return <Collapse key={idx} content={item.children} heading={item.name} />
        }
        if (item.type === "file") {
          return <div key={item.name}>{item.name}</div>
        }
      })} */}
      <Generator data={data} />
    </div>
  )
}

export default App
