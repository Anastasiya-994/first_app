import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Maxlength, required } from '../../Other/loading/required';
import { Input } from '../../renderField/renderField';
import { connect } from 'react-redux';
import {LoginThunk} from '../state/auth';
import { Redirect } from 'react-router-dom';
import classes from '../../renderField/renderField.module.css'
import { IsAuth } from '../Header/HeaderCelector';

let MaxLengthLogin = Maxlength(50);
let MaxLengthPass = Maxlength(15);

let Login = (props)=>{
    
    return(<form onSubmit={props.handleSubmit}>
        <div><Field component={Input} name='email' placeholder='Email' validate={[required, MaxLengthLogin]}/></div>
        <div><Field component={Input} type='password' name='password'  placeholder='Password'validate={[required, MaxLengthPass]}/></div>
        <div><Field component='input' type='checkbox' name='rememberMe'/>Remember Me</div>
        {props.error &&
            <div className={classes.errorBlock}>{props.error}</div>
        }
        <button>Send</button>
        
    </form>)
}

const LoginConteinerForm = reduxForm({form:'loginForm'})(Login);

const LoginConteiner = (props)=>{
    
    let onSubmit=({email, password, rememberMe})=>{
         props.LoginThunk(email, password, rememberMe);
     }
     
     if(props.isAuth){return <Redirect to='/profile'/>}
     
         return<div>
             <LoginConteinerForm onSubmit={onSubmit}/>
         </div>
 
 }

const mapStateToProps = (state)=>{
    return{
        isAuth: IsAuth(state)
    }
    
}

const LoginConteinerConnect = connect(mapStateToProps, {LoginThunk})(LoginConteiner);

export default LoginConteinerConnect;