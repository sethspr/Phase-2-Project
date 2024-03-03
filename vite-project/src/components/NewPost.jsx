import React, { useState } from 'react'
import './NewPost.css'

const NewPost = () => {

const [isShown, setIsShown] = useState(false)

const handleShow = () => {
    setIsShown(!isShown)
}

    return (
        <div className="form-container">
            <button className='show' onClick={handleShow}>What would u like to share today</button>
            {isShown &&  <form className="form">
                <input type='text' name='Account holder' placeholder='Who are you?...' className='input'/>
                <input type='text' name='image' placeholder='What are you thinking?...' className='input'/>
                <input type='text' name='Description' placeholder='What are you thinking?...' className='review'/>
                <button type="submit" className='submit-button'>Submit</button>
            </form>}
           
        </div>
    )
    
}

export default NewPost