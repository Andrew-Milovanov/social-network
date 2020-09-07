import React from 'react';
import { addPostActoinCreator } from '../profile-reducer';
import Mypost from './MyPost';
import { connect } from 'react-redux';


let mapStateToPorops = (state)=> {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
     
    }
}
    let mapDispatchToPorops =(dispatch)=>{
        return{
            addPost: (newPostText)=>{ dispatch(addPostActoinCreator(newPostText))}

        }
    }

    const MypostContainer = connect(mapStateToPorops,mapDispatchToPorops)(Mypost);
export default MypostContainer;