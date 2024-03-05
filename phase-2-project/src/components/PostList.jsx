import React from 'react'
import PostCard from './PostCard'

function PostList({ mediaPosts }) {
  return (
    <div className="post-list">Feed
        {mediaPosts.map((mediaPost) => 
        <PostCard 
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