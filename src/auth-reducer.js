import { LoginAPI } from "./api/api"
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'


let initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
}

const authReducer = (state = initialState, action)=>{


    switch(action.type){
        case SET_USER_DATA: 
            return{
                ...state,
                ...action.payload,
             }
            default:  
            return state
    }
       
}

export const setAuthUserData = (id, email,login,isAuth) =>({type: SET_USER_DATA, payload:{id,email,login, isAuth} })
  export const unfollow = (userId) =>({ type: UNFOLLOW, userId })

export const LoginUser = ()=>{
  return(async(dispatch)=>{
  let data = await LoginAPI.UserIn()
      if (data.resultCode === 0) {
          let {id, email, login} =  data.data
          dispatch(setAuthUserData(id,email,login, true))
      } 
})
}

export const login = (email, password, rememberMe)=>async(dispatch)=>{
   let data = await LoginAPI.login(email, password, rememberMe)
      if (data.resultCode === 0) {
       dispatch(LoginUser())
      }else{
        let message =  data.messages.length > 0 ? data.messages[0]: 'Some error'
        dispatch(stopSubmit('login',{_error: message}))
      }
}

export const logout = ()=>async(dispatch)=>{
  let data = await LoginAPI.logout()
    if (data.resultCode === 0) {
     dispatch(setAuthUserData(null,null,null, false))
    }
}




export default authReducer
