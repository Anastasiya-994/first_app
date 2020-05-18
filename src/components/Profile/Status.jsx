import React from 'react';
import classes from './Profile.module.css';



class Status extends React.Component {

    state={
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status != this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }

    activeEditMode(){
        this.setState({
            editMode: true
        })
        
    }
    dactiveEditMode(){
        this.setState({editMode: false})
        this.props.SetUserStatusThunk(this.state.status)
    }
    ChangeStatus(e){
        this.setState({
            status: e.currentTarget.value
        })
    }

    

    render(){
        return<div>
            {!this.state.editMode &&
                 <div onClick={this.activeEditMode.bind(this)}>{this.props.status || '----'}</div>
            }
            {this.state.editMode &&
                <input onChange={this.ChangeStatus.bind(this)} value ={this.state.status} onBlur={this.dactiveEditMode.bind(this)}></input>
            }
        </div>
    };
}

export default Status;