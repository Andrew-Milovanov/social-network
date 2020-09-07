import React from 'react';
import Post from './Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../utils/validators/validators';
import { Element } from '../Users/FormsControls';

let MaxLenth = maxLengthCreator(10)
let TextArea = Element('textarea')

const MyPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field placeholder={'Enter your message'}  component={TextArea}  name={'newPostText'} validate={[required, MaxLenth]}/>
        </div>
        <div>
        <button>Add post</button>
        </div>
        </form>
    )
}

 const MyPostFormRedux = reduxForm({form: 'post'})(MyPostForm)

const Mypost = React.memo((props)=> {
  
   
    let PostElement = props.posts.
    map(post => <Post message={post.message} likes={post.likes} /> )

        const addNewPost = (formData) =>{
            props.addPost(formData.newPostText)
        }

   return(
        <div>
        My Posts
        <MyPostFormRedux onSubmit={addNewPost} /> 
            <div>
                {PostElement}
            </div>

        </div>
    )
   })
    

export default Mypost;