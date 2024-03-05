import React, { useState } from 'react'

const NewComment = ({needComments, setNeedComments}) => {

    const [comment, setComment] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Hey');
        
        const newComment = comment
       
        setNeedComments(
            [...needComments, newComment]
        );

    }
  return (
    <div className='new-comment'>
             <form onSubmit={handleSubmit}>
 <input type="text"  placeholder='Write your thoughts about it...' name='comments' className='comments' value={comment} onChange={(e) => setComment(e.target.value)}/>
  <button>Submit</button>
 </form>
  </div>
  )
}

export default NewComment