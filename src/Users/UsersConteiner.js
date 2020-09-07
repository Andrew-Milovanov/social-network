import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow,  setCurrentPage,  togglefollowingInProgress, getUsers, followUser, unfollowUser } from './user-reducer'
import Users from './Users';
import Preloader from './common/preloader/Preloader';
import { compose } from 'redux';
import { getUserSuperSelector, getpageSizeUser, gettotalUsersCount, getcurrentPageUser, getisFetching, getfollowingInProgress } from './users-selectors';


class UsersComponent extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){ 
        this.props.getUsers(this.props.currentPage ,this.props.pageSize)
    }
    onPageChange = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber ,this.props.pageSize)

    }


    render() {

        
        return<> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}

                        
        />
    </>
    }
}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUserSuperSelector(state),
        pageSize: getpageSizeUser(state),
        totalUsersCount: gettotalUsersCount(state),
        currentPage: getcurrentPageUser(state),
        isFetching: getisFetching(state),
        followingInProgress: getfollowingInProgress(state)
    }
}






    export default compose(connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        togglefollowingInProgress, getUsers, followUser, unfollowUser}))(UsersComponent)