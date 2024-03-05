import React, { useState } from 'react'

const PostCard = ({id, name, review, likes, comments, image}) => {
    const [isLiked, setIsLiked] = useState(likes);

    function handleCLick(){
        setIsLiked(!isLiked)
    fetch(`http://localhost:3000/posts/${id}`, {
        method:"PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            likes: !likes,
        }),
    })
    .then((r) => r.json())
    .then((d => console.log(d)))
}
  return (
    <div className='post-container'>
        <div className="post-header">
            <h3>{name}</h3>
            <img src={image} />
            <p style={{fontWeight: 'bold'}}>{review}</p>
            <div className="like-button-container">
                <button className='like-button' onClick={handleCLick}>
                    {isLiked ? "✔️" : "👍"}
                </button>
            </div>
            <ul className='comment-section'>
                {comments.map((comment, index) => {
                    <p key={index} className='comment-bubble'>{comment}</p>
                })}
            </ul>
        </div>
      
    </div>
  )
}

export default PostCard
