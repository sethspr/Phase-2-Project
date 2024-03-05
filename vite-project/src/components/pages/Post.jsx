import React from 'react'
import PostCard from './PostCard';

const Post = ({mediaPosts}) => {
  return (
    <div className='post-list'>Feed
  {mediaPosts.map((mediaPost) => {
    <Postard 
    key={mediaPost.id}
    id={mediaPost.id}
    name={mediaPost.name}
    review={mediaPost.review}
    image={mediaPost.image}
    likes={mediaPost.likes}
    comments={mediaPost.comments}
    />
  })}
      
    </div>
  )
}

export default Post;
