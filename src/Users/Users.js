import React from 'react'
import Paginator from './paginator';
import User from './User';






let Users = (props) => {

  return ( <div>
        <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize}/>
    {   
            props.users.map(u=> <User user = {u} followingInProgress={props.followingInProgress} followUser={props.followUser} unfollowUser={props.unfollowUser} key={u.id}/> )
        }
        </div>
  )

}
export default Users