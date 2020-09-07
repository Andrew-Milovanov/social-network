import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {Element, FieldCreator} from '../Users/FormsControls'
import { required } from '../utils/validators/validators'
import { connect } from 'react-redux'
import { login,logout } from '../auth-reducer'
import { Redirect } from 'react-router-dom'
import s from '../Users/FormsControls.module.css'




const Input = Element('input')

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {FieldCreator('Login','email',Input, [required])}
            </div>
            <div>
                {FieldCreator('Password','password',Input, [required], {type: 'password'} )}
            </div>
            <div>
                {FieldCreator(null,'rememberMe',Input,[],{type: 'checkbox'}, 'remember me')} 
            </div>
            <div className={s.formsummaryerror}>
                {error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    
    const onSubmit = (formData)=> {
        props.login(formData.email, formData.password, formData.rememberMe)
    
    }

    if (props.isAuth) {
      return  <Redirect to={"/profile"} />
    }

    return (
        <div>
            <hi>Login</hi>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login,logout})(Login)