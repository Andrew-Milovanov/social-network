import React from 'react'
import p from './Dialog.module.css'

const Message = (props)=>{
    return(
        <div className={p.message}>{props.text}</div>
    )
};
export default Message