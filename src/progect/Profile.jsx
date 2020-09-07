import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MypostContainer from './MyPostContainer';


const Profile = (props) => {



  return (
    <div className={s.gg}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <div className={s.gg1}>
        <MypostContainer profile={props.profile} />
      </div>

    </div>
  )
}
export default Profile;