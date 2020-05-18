import React from 'react';
import classes from './Profile.module.css';
import Post from './Post';
import { Field, reduxForm } from 'redux-form';
import { required, Maxlength } from '../../Other/loading/required';
import { Textarea } from '../../renderField/renderField';
import StatusHook from './StatusHook';


const Profile =(props)=> {

    let postElements = props.state.userPostsData.map((mes)=>{
        return <Post messegest={mes.messegest}/>;
    });
    
    let addPost = (values)=>{
        props.addPost(values.newPost);
        
    };

    return(
        <div className={classes.profile}>
            <img src='https://ae01.alicdn.com/kf/HTB1UnFjJVXXXXX7XVXXq6xXFXXX0/jigsaw-1000-pieces-LANDSCAPE-PUZZLE-FOR-children-and-adult-PUZZLE-GAMES-nutural-beautiful-sight-trees-moon.jpg'/>
            <div><StatusHook status = {props.status} SetUserStatusThunk={props.SetUserStatusThunk}/></div>
            <div>{props.profileData.aboutMe}</div>
            <div>{props.profileData.userId}</div>
            <div className={classes.addPost}>
                <ProfileFormRedux onSubmit={addPost}/>
            </div>
            {postElements}        
        </div>
    );
}
let profileMaxLength = Maxlength(10);
let ProfileForm = (props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newPost' placeholder='New Post'  validate={[required, profileMaxLength]}/>
        <button>Add Post</button>
    </form>
    )
}
const ProfileFormRedux = reduxForm({form:'profileFormAddNewPost'})(ProfileForm);

export default Profile;