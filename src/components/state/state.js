import ProfileReduser from "./profile-reduser";
import MessagestReduser from "./messagest-reduser";


let store ={
    _state : {
        messagestPage:{
           userData : [
               {name: 'Dima', id: 1},
               {name: 'Zina', id: 2},
               {name: 'Alla', id: 3},
               {name: 'Maks', id: 4},
               {name: 'Viktor', id: 5}
           ],
           userMessagestData : [
               {text: 'My messagest', id: 1},
               {text: 'Hello World', id: 2},
               {text: 'How are you?', id: 3},
               {text: 'Are you busy', id: 4}
           ],
           newMessagestData:'Text Messagest'
           
        },
       // navBarPage:{},
       profilePage: {
           userPostsData :[
              {messegest:'Hello World', id: 1},
              {messegest:'How are you?', id: 2}
           ],
           newPostData:'Text Post'
       }
       },
    _rootRemouve(){
        console.log('Changed');
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.profilePage = ProfileReduser(action, this._state.profilePage);
        this._state.messagestPage = MessagestReduser(action, this._state.messagestPage);
        this._rootRemouve(this._state);
    },
    subscribe(observer){
        this._rootRemouve = observer;
    }
};



export default store;