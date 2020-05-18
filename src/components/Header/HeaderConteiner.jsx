import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {AuthThink, LogOutThunk} from '../state/auth';
import { Login, IsAuth } from './HeaderCelector';



class HeaderConteinerAPI extends React.Component{    

    render(){
       
        return<Header login={this.props.login} isAuth={this.props.isAuth} LogOutThunk={this.props.LogOutThunk}/>
    }
}
const mapStateToProps = (state)=>{
    return{
        login: Login(state),
        isAuth: IsAuth(state)
    }
};

const HeaderConteiner = connect(mapStateToProps, {AuthThink, LogOutThunk})(HeaderConteinerAPI);
export default HeaderConteiner;

