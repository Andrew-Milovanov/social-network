import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import profileReducer from "./profile-reducer"
import dialogReducer from "./dialog-reducer"
import sidebarReducer from "./sidebar-reeducer"
import usersReducer from './Users/user-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    appPage: appReducer,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( compose(
    applyMiddleware(thunkMiddleware))));



window.store = store

export default store