import React from 'react';
import {connect} from 'react-redux';
import {GetUsersThunk, PageChangeThunk, UnFollowThunk, FollowThunk } from '../state/users-reduser';
import Users from './Users';
import classes from './Users.module.css';
import loading from '../../Other/loading/loading.gif';
import { AuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
import { GetUsers, TotalCount, GetPageSize, GetPageCurrent, GetIsLoading, GetIsProses } from './UserSelector';


class UsersConteinerAPI extends React.Component{
    componentDidMount(){
        this.props.GetUsersThunk(this.props.pageSize, this.props.pageCurrent);
    };   
    
    pageChange= (p)=>{
        this.props.PageChangeThunk(p, this.props.pageSize);
        
    };

    render(){
        return<>
                {this.props.isLoading == false?<img src={loading} className={classes.loading}/> : null}
                    <Users state={this.props.state} 
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    pageCurrent={this.props.pageCurrent}
                    isLoading={this.props.isLoading}
                    pageChange={this.pageChange}
                    isProses={this.props.isProses}
                    UnFollowThunk={this.props.UnFollowThunk}
                    FollowThunk={this.props.FollowThunk}/>
            </>}
}

const mapStateToProps = (state)=>{
    return{
        state: GetUsers(state),
        totalCount: TotalCount(state),
        pageSize: GetPageSize(state),
        pageCurrent: GetPageCurrent(state),
        isLoading: GetIsLoading(state),
        isProses: GetIsProses(state),
       
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        GetUsersThunk: (pageSize, pageCurrent)=>{dispatch(GetUsersThunk(pageSize, pageCurrent))},
        PageChangeThunk: (p, pageSize)=>{dispatch(PageChangeThunk(p, pageSize))},
        UnFollowThunk: (id)=>{dispatch(UnFollowThunk(id))},
        FollowThunk: (id)=>{dispatch(FollowThunk(id))}
    };
};
const UsersConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)(UsersConteinerAPI);


export default UsersConteiner;