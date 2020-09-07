import React from 'react'
import p from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props)=>{
    return(
        <div className={p.dialog +' '+ p.activing}>
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div> 
    )
};
export default DialogItem