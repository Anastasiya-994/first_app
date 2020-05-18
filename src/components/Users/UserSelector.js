import { createSelector} from "reselect"

const GetUsersSelector = (state)=>{
    return state.usersPage.users
}

export const GetUsers = createSelector(GetUsersSelector, (users)=>{
    return users.filter(u=>(u=true))
})



export const TotalCount = (state)=>{
    return state.usersPage.totalCount
       
}

export const GetPageSize = (state)=>{
    return state.usersPage.pageSize
       
}

export const GetPageCurrent = (state)=>{
    return state.usersPage.pageCurrent
}

export const GetIsLoading = (state)=>{
    return state.usersPage.isLoading
}

export const GetIsProses = (state)=>{
    return state.usersPage.isProses
}