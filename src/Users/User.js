import React from 'react'
import photosimage from '../userphotos.jpg'
import styles from './users.module.css'
import { NavLink } from 'react-router-dom';







let User = ({user,followingInProgress, followUser,  unfollowUser}) => {

  return (    <div> 
                <span>
                    <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small: photosimage} className={styles.photo}/>
                    </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                         <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>{
                        unfollowUser(user.id)
                              }}>Unfollow</button> :
                          <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { 
                                followUser(user.id)

                            }}>Follow</button> }
                    </div>
                        
                </span>
                <span>
                    <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div><div>{'user.location.city'}</div>
                    </span>
                </span>
                </div>
             )
}

export default User