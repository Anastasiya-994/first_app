import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state)=>{
    return {auth: state.auth.isAuth} 
}

export const AuthRedirect = (Component)=>{

    let withAuthRedirect = (props)=>{
        
        if (!props.auth) return <Redirect to='/login'/>;
        return <Component {...props} />
    }
    const AuthRedirectConnect = connect(mapStateToPropsForRedirect, {})(withAuthRedirect)
    return AuthRedirectConnect;
    
}



