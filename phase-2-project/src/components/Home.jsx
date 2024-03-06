import { useEffect, useState } from 'react'
import NewPost from './NewPost'
import NavBar from './NavBar'
import './App.css'
import PostList from './PostList'




function Home() {

  const [mediaPosts, setMediaPosts] = useState([])

  const [needComments, setNeedComments] = useState([])

  

  useEffect(()=> {
    fetch(`http://localhost:3000/posts`)
    .then((r) => r.json())
    .then((d) => {
      setMediaPosts(d)
    })
  }, [])
 

  return (
    <div className='App'>
    <div className="nav-container">
      <NavBar/>
    </div>
    <NewPost posts={mediaPosts} setData={setMediaPosts}/>
    <PostList mediaPosts={mediaPosts} setData={setMediaPosts} needComments={needComments} setNeedComments={setNeedComments}/>
    </div>
  )
}

export default Home;
