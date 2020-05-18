import * as axios from 'axios';

const instalse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY':'9c235808-9a0e-43c3-afce-f6a77e259e49'}
})

export const getUsers =(p, pageSize)=>{
    return instalse.get(`users?count=${pageSize}&page=${p}`).then(response=>{return response.data})
};

export const getUsers2 =(pageSize, pageCurrent)=>{
    return instalse.get(`users?count=${pageSize}&page=${pageCurrent}`).then(response=>{return response.data})
};

export const unFollow =(id)=>{
    return instalse.delete(`follow/${id}`).then(response=>{return response.data})
};

export const follow =(id)=>{
    return instalse.post(`follow/${id}`).then(response=>{return response.data})
};

export const profileInfo=(userId)=>{
    return instalse.get(`profile/${userId}`).then(response=>{return response.data})
};

export const auth =()=>{
    return instalse.get(`auth/me`).then(response=>{ return response.data})
            
};

export const getUserStatus = (id)=>{
    return instalse.get(`/profile/status/${id}`)
};

export const setUserStatus = (status)=>{
    return instalse.put(`/profile/status`, {status:status})
};

export const logIn = (email, password, rememberMe=false)=>{
    return instalse.post(`/auth/login`, {email, password, rememberMe})
};

export const logOut = ()=>{
    return instalse.delete(`/auth/login`)
};