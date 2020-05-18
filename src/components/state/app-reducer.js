import { AuthThink } from "./auth";

const InitionlaseSussefull = 'SUSSEFULL';
let InitialState={
    initionlase: false
};

const AppReducer =(state = InitialState, action)=> {
    switch (action.type) {
        case InitionlaseSussefull:
            return{
            ...state,
            initionlase:true
        }
    
        default:
            return state;
    }
};

const  SetInitionlaseSussefull = ()=>({type: InitionlaseSussefull});

export const IniTionlaseThunk = ()=>(dispatch)=>{
        let promis = dispatch(AuthThink());
        promis.then(()=>{dispatch(SetInitionlaseSussefull())});
}


export default AppReducer;
