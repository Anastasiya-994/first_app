import {connect} from 'react-redux';
import { createElementAddPost, ProfileInfoThunk, SetUserStatusThunk, GetUserStatusThunk} from '../state/profile-reduser';
import React from 'react';
import Profile from './Profile';
import { withRouter} from 'react-router-dom';
import { AuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
import { AvntificationId, ProfilePage, ProfileData, StatusText } from './ProfileCelector';



class ProfileConteinerAPI extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.avntificationId;
        };
        this.props.ProfileInfoThunk(userId);
        this.props.GetUserStatusThunk(userId);
    };   
    

    render(){
        return<>
            <Profile state={this.props.state} profileData={this.props.profileData} 
                     addPost={this.props.addPost} changePost={this.props.changePost}
                     status={this.props.status} SetUserStatusThunk = {this.props.SetUserStatusThunk}/>
        </>}

}

const mapStateToProps = (state)=>{
    return {
        state: ProfilePage(state),
        profileData: ProfileData(state),
        status: StatusText(state),
        avntificationId: AvntificationId(state)
       
    };
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addPost : (text)=> {dispatch(createElementAddPost(text))},
        ProfileInfoThunk: (userId)=>{dispatch(ProfileInfoThunk(userId))},
        SetUserStatusThunk: (status)=>{dispatch(SetUserStatusThunk(status))},
        GetUserStatusThunk: (id)=>{dispatch(GetUserStatusThunk(id))}
    };
}
const ProfileConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    AuthRedirect
    )(ProfileConteinerAPI)


export default ProfileConteiner;