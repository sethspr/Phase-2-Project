import React from 'react'
import PostCard from './PostCard'

function PostList({ mediaPosts, setData, needComments, setNeedComments, addComment}) {
  return (
    <div className="post-list">Feed
        {mediaPosts.map((mediaPost) => 
        <PostCard 
            post ={mediaPost}
            needComments = {needComments}
            setNeedComments = {setNeedComments}
            setData={setData}
            key={mediaPost.id}
            id={mediaPost.id}
            name={mediaPost.name}
            review={mediaPost.review}
            image={mediaPost.image}
            likes={mediaPost.likes}
            comments={mediaPost.comments}
        />)}
       
    </div>
  )
}

export default PostList