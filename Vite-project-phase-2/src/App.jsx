import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import PostList from './Components/PostList'

function App() {

  return (
    <>
      <div>
        <div className="App">
          <NavBar />
          <PostList />
        </div>
      </div>
    </>
  )
}

export default App
