import { useEffect, useState } from 'react'
import NewPost from './NewPost'
import NavBar from './NavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Cool from './pages/Cool'
import Post from './pages/Post'
import Home from './pages/Home'




function App() {

  const [mediaPosts, setMediaPosts] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:3000/posts`)
    .then((r) => r.json())
    .then((d) => {
      setMediaPosts(d)
    }, [])
  })
 

  return (
    <div className='App'>
    <NavBar/>
    <NewPost/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='cool' element={<Cool/>}/>
      <Route path='posts' element={<Post/>}/>
    </Routes>
    <Post mediaPosts={mediaPosts}/>
    </div>
  )
}

export default App
