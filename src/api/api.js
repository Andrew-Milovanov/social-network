import * as axios from 'axios'




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b616c3e6-946e-4dd2-8f06-b4a4072442b6"
    },
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        ).then(response => { return response.data })
    },
    unfollowUsers(props) {
        return (
            instance.delete(`/follow/${props}`).then(response => { return response.data })
        )
    },
    followUsers(props) {
        return (
            instance.post(`/follow/${props}`).then(response => { return response.data })
        )
    }


}
export const LoginAPI = {
    UserIn() {
        return (
            instance.get(`/auth/me`).then(response => { return response.data })
        )
    },
    login(email, password, rememberMe) {
        return (
            instance.post(`/auth/login`, { email, password, rememberMe }).then(response => { return response.data })
        )
    },
    logout() {
        return (
            instance.delete(`/auth/login`).then(response => { return response.data })
        )
    },


}

export const ProfileId = {
    ProfileUser(userId) {
        console.warn('use olg ProfileUser')
        return (
            ProfileAPI.ProfileUser(userId)
        )
    }
}


export const ProfileAPI = {
    ProfileUser(userId) {
        return (
            instance.get(`/profile/` + userId).then(response => { return response.data })
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/` + userId).then(response => { return response.data })
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status/`, { status: status })
        )
        
    },
    savePhoto(file) {
        let formData = new FormData()
        formData.append('image', file)
        return (
            instance.put(`profile/photo/`,formData , {headers: {'Content-Type': 'multipart-form-data'}})
        )
    }
}



