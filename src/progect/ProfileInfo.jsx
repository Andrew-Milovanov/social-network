import React from 'react'
import s from './Profile.module.css'
import Preloader from '../Users/common/preloader/Preloader'
import shoto from './shoto.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  const installPhoto = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div >
        <img src={props.profile.photos.large != null ? props.profile.photos.large : shoto} className={s.shoto} />
        <div> {props.isOwner && <input type={'file'} onChange={installPhoto}/>}</div>
       <div> <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus} /></div>
       
      
      </div>
    </div>
  )
}
export default ProfileInfo;