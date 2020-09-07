import { ProfileId, ProfileAPI } from "./api/api"

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO = 'profile/SET_PHOTO'




let initialState = {
  posts: [
    { id: 1, message: 'Shoto', likes: 20 },
    { id: 2, message: 'Where you?', likes: 50 },
    { id: 3, message: 'Answer Me', likes: 30 }
  ],
  newPostText: "its todoroki",
  profile: null,
  status: "",
  photos: null


}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,


      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status

      }
    }
    case SET_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}

      }
    }
    default:
      return state
  }

}

export const addPostActoinCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const ProfileUserAPI = (userId) => {
  return ((dispatch) => {
    ProfileId.ProfileUser(userId).then(data => {
      dispatch(setUserProfile(data))

    });
  }
  )
}
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setPhoto = (photos) => ({ type: SET_PHOTO, photos })

export const getStatus = (status) => {
  return ((dispatch) => {
    ProfileAPI.getStatus(status).then(data => {
      dispatch(setStatus(data))

    });
  }
  )
}
export const updateStatus = (status) => {
  return async (dispatch) => {
    try {
      let response = await ProfileAPI.updateStatus(status)

      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    try {
      let response = await ProfileAPI.savePhoto(file)

      if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
      }
    } catch (error) {
      console.log(error)
    }
  }
}





export default profileReducer
