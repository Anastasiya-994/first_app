import React from 'react';
import classes from './Messagest.module.css';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const UsersItem = (props)=>{
    return (
        <div className={classes.user}>
            <Link to={'/messagest/'+ props.id} className={classes.link}>
                {props.name}
            </Link>
        </div>
    );
}

const UserMessagest = (props)=>{
    return (
        <div className={classes.messagest}>
            {props.text}
        </div>
    );
}



const Messagest = (props)=>{
    let UserElements = props.state.userData.map((name)=>{
        return <UsersItem name={name.name} id={name.id}/>;
    });
    
    let TextMessagestElements= props.state.userMessagestData.map((text)=>{
        return <UserMessagest text={text.text} id={text.id}/>;
    });


    let addMessagest = (values)=>{
        props.addMessagest(values.newMessagest);
    };

    
    
    return(
    
        <div className={classes.messagests}>
            <div className={classes.users}>
                {UserElements}
            </div>  
            <div className={classes.textMessagest}>
                {TextMessagestElements}
                
            </div>
            <div className={classes.addMessagest}>
                <MessagestFormRedux onSubmit={addMessagest}/>
            </div>
            
        </div>

    );
}

let MessagestForm = (props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <div><Field component='textarea' placeholder='New Messagest' name='newMessagest'/></div>
        <button>Add Messagest</button>
    </form>

    )
}

const MessagestFormRedux = reduxForm({form:'messagestForm'})(MessagestForm)

export default Messagest;