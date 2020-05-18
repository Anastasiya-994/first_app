import { profileInfo, setUserStatus, getUserStatus } from "../../axios/getAPI";

const AddPost = 'ADD-POST';
const GetPostData = 'PROFILE-DATA';
const SetStatus = 'SET-STATUS';
const DeletePost = 'DELETE';


let InitialState={
    userPostsData :[
        {messegest:'Hello World', id: 1},
        {messegest:'How are you?', id: 2}
     ],
     profileData:[],
     status : ''
};

const ProfileReduser =(state = InitialState, action)=> {
    let copyState = {
        ...state,
        userPostsData: [...state.userPostsData]
    };
    let newPost = {
        messegest: action.text,
        id: 3
    };
    switch (action.type) {
        case AddPost:
            copyState.userPostsData.push(newPost);
        copyState.newPostData='';
            return copyState;
        case GetPostData:
            copyState.profileData=action.data;
            return copyState;
        case SetStatus:
            copyState.status=action.status;
            return copyState;
        case DeletePost:
            copyState.userPostsData=copyState.userPostsData.filter(p=>p.id!=action.id);
            return copyState;
        default:
            return copyState;
    }
    
};

export const deletePost = (id)=>({type:DeletePost, id})
export const createElementAddPost = (text)=>({type: AddPost, text});
export const profileDataCA = (data)=>({type: GetPostData, data: data});
const setStatusCA = (status)=>({type: SetStatus, status});


export const ProfileInfoThunk = (userId)=>{
    return async (dispatch)=>{
        let data = await profileInfo(userId);      
                    dispatch(profileDataCA(data))
    }
}

export const SetUserStatusThunk = (status)=>{
    return async (dispatch)=>{
        let response = await setUserStatus(status);
            if (response.data.resultCode === 0){
                dispatch(setStatusCA(status))
            }
    }
}

export const GetUserStatusThunk = (id)=>{
    return async (dispatch)=>{
        if(!id){id=2};
        let status =await getUserStatus(id);
            dispatch(setStatusCA(status.data))
    }
}

export default ProfileReduser;
