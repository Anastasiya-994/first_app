import React from 'react';
import UserElement from './UserElement';
import PageElement from './PageElement';


let Users = (props)=>{

    return (
            <div>
                <PageElement totalCount={props.totalCount}
                             pageSize = {props.pageSize}
                             pageCurrent={props.pageCurrent}
                             pageChange={props.pageChange}/>
                
                <UserElement state = {props.state} 
                             isProses ={props.isProses}
                             UnFollowThunk={props.UnFollowThunk}
                             FollowThunk = {props.FollowThunk}/>
    </div>
    );
};

export default Users;