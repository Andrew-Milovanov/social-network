import profileReducer from "./profile-reducer"
import dialogReducer from "./dialog-reducer"
import sidebarReducer from "./sidebar-reeducer"

let store = {
  _state: {
    profilePage:{
          posts:  [
              {id: 1, message: 'Shoto', likes: 20},
              {id: 2, message: 'Where you?', likes: 50},
              {id: 3, message: 'Answer Me', likes: 30}
              ],
      newPostText: "its todoroki" 
      },
  
      dialogPage:{
           info: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Max'}
            ],
          
             message: [
              {id: '3', message: 'Hi'},
              {id: '3', message: 'How are you'},
              {id: '3', message: 'Good bay'}
            ],
            newMessageBody: ""
          },
        sidebarPage:{}
  },

  getState(){
    return this._state
  },

  _callSubscriber(){
      console.log('State chenget')
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  dispatch(action){

    this._state.profilePage = profileReducer( this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action)

    this._callSubscriber(this._state)



   
}
}

export default store