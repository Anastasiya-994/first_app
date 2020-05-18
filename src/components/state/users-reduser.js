import { getUsers,  getUsers2, unFollow, follow} from '../../axios/getAPI';
import { changeArrElem } from '../../renderField/changeArrElem';

const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetPageCurrent = 'SET-PAGE-CURRENT';
const SetTotalCount = 'SET-TOTAL-COUNT';
const IsLoading = 'LOADING';
const IsProses = 'PROSES';

let InitialState={
    users :[  ],
    totalCount: 0,
    pageSize: 30,
    pageCurrent:1,
    isLoading: true,
    isProses: []
};

const UsersReduser =(state = InitialState, action)=> {
    switch (action.type) {
        case Follow: 
            return{
                ...state,
                users: changeArrElem(state.users, 'id', action.idUser, {followed: true})
            }
        case Unfollow:
            return{
                ...state,
                users: changeArrElem(state.users, 'id', action.idUser, {followed: false})
            }
        case SetUsers:
            return{
                ...state, users: action.users
            }
        case SetPageCurrent:
            return{
                ...state, pageCurrent: action.pageCurrent
            }
        case SetTotalCount:
            return{
                ...state, totalCount: action.totalCount
            }
        case IsLoading:
            return{
                ...state, isLoading: action.isLoading
            }
        case IsProses:
            return{
                ...state, isProses: action.isProses
                    ? [...state.isProses, action.id]
                    : state.isProses.filter(id=> id != action.id)
            }
    
        default:
            return state;
    }
    
};

export const FollowCA = (idUser)=>({type: Follow, idUser: idUser});
export const UnfollowCA = (idUser)=>({type: Unfollow, idUser: idUser});
export const SetUsersCA = (users)=>({type: SetUsers, users: users});
export const SetPageCurrentCA = (pageNamber)=>({type: SetPageCurrent, pageCurrent: pageNamber});
export const SetTotalCountCA = (totalCount)=>({type: SetTotalCount, totalCount});
export const IsLoadingCA = (load)=>({type: IsLoading, isLoading:load});
export const IsProsesCA = (isProses, id)=>({type: IsProses, isProses, id});

export const GetUsersThunk = (pageSize, pageCurrent) =>{ 
    return async (dispatch)=>{
            dispatch(IsLoadingCA(false))
            let data = await getUsers2(pageSize, pageCurrent);         
                    dispatch(IsLoadingCA(true));
                    dispatch(SetUsersCA( data.items));
                    dispatch(SetTotalCountCA(data.totalCount))
    }
};

export const PageChangeThunk = (p, pageSize) =>{
    return async (dispatch)=>{
        dispatch(SetPageCurrentCA(p));
        dispatch(IsLoadingCA(false));
         let data = await getUsers(p, pageSize);         
                 dispatch(IsLoadingCA(true));
                dispatch(SetUsersCA(data.items))
    }
};
const FollowUnfollw =(id, API, nameFunCA)=>{
    return async (dispatch)=>{
        dispatch(IsProsesCA(true, id));
        let data = await API(id);
            if(data.resultCode == 0){
                dispatch(IsProsesCA(false, id));
                dispatch(nameFunCA(id))
            }
    }
}
export const UnFollowThunk=(id) => {return FollowUnfollw(id, unFollow, UnfollowCA)};
export const FollowThunk=(id) => { return FollowUnfollw(id, follow, FollowCA)};


export default UsersReduser;
