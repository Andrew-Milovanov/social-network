import { createSelector } from 'reselect'

const getUser = (state) => {
    return state.usersPage.users
}

export const getUserSuperSelector = createSelector(getUser, (users) => {
    return users.filter(u => true)
})

export const getpageSizeUser = (state) => {
    return state.usersPage.pageSize
}

export const gettotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getcurrentPageUser = (state) => {
    return state.usersPage.currentPage
}

export const getisFetching = (state) => {
    return state.usersPage.isFetching
}

export const getfollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}