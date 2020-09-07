import React from 'react'
import './Post.css'

const Post = (props)=>{
    
    return(
        <div>
            <img className='postik' src='https://i.pinimg.com/originals/5c/89/59/5c8959822d5391134e40091d7e8ece6c.png'/>
            <div>
                message: {props.message}
            </div>
            <div>
                likes: {props.likes}
            </div>
        </div>
    )
}
export default Post;