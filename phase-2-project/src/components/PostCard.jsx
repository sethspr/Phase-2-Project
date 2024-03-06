import React, { useState } from 'react';
import './PostCard.css';
import NewComment from './NewComment';
import { Link } from 'react-router-dom';

function PostCard({ id, name, review, likes, comments = [], image }) {
    const [upLikes, setUpLikes] = useState(likes);
    const [isComment, setIsComment] = useState(false)
    const [showPost, setShowPost] = useState(true)

    const [displayComments, setDisplayComments] = useState(comments)
    
    function handleLikes(smth) {
      const updatedLikes = smth ? upLikes + 1 : upLikes - 1
      fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: updatedLikes
        }),
      })
      .then((response) => response.json())
      .then((data) => setUpLikes(data.likes))
      .catch((error) => console.error('Error updating likes:', error));
    }
    
    
   
        function showComment() {
          setIsComment(!isComment)
        }


    return (
        <div className="post-container">
            <div className="post-header">
            <Link to={`/profile/${id}`}><h3>{name}</h3></Link>
                <img src={image} alt="Post Image" />
                <p style={{ fontWeight: 'bold' }}>{review}</p>
                <div className="like-button-container">
                    <button className="like-button" onClick={() => handleLikes(true)}>
                        {upLikes} 👍🏽
                    </button>
                    <button className="dislike-button" onClick={() => handleLikes(false)}>
                          👎🏽
                    </button>
                </div>
                <button className="comment-button" onClick={showComment}> Comment: 💬</button>
               { isComment && (<ul className="comment-section">
                    {displayComments.map((comment, index) => (
                        <p key={index} className="comment-bubble">{comment}</p>
                    ))}
                </ul>)}
                <NewComment comments = {displayComments} setDisplayComments={setDisplayComments} />
            </div>
        </div>
    );
}

export default PostCard;
