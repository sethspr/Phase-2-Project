import React from 'react'
import { useState, useEffect } from 'react'

function PostCard({ id, name, review, likes, comments, image }) {
    const [isLiked, setIsLiked] = useState(likes);

    function handleClick() {
      setIsLiked(!isLiked);
      fetch(http://localhost:4000/posts/${id}, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isLiked: (isLiked + 1),
        }), // only PATCH-ing likes - need to add comments
      })
        .then((response) => response.json())
        .then((data) => setIsLiked(data.isLiked));

      // setIsLiked(!isLiked); // this can be called before or after fetch, as long as it's within the object.
    }

    return (
        <div className="post-container">
          <div className="post-header">
            <h3>{name}</h3>
            <img src={image} alt="Post Image" />
            <p style={{ fontWeight: 'bold' }}>{review}</p>
            <div className="like-button-container">
              <button className="like-button" onClick={handleClick}>
                {isLiked ? "✔️" : "✅"}
              </button>
            </div>
            <ul className="comment-section">
              {comments.map((comment, index) => (
                <p key={index} className="comment-bubble">{comment}</p>
              ))}
            </ul>
          </div>
        </div>
      );

}

export default PostCard