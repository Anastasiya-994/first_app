import ProfileReduser, { createElementAddPost, deletePost } from "./profile-reduser"

let state={
    userPostsData :[
        {messegest:'Hello World', id: 1},
        {messegest:'How are you?', id: 2}
     ]
    }

it('check lenght', ()=>{
    let action = createElementAddPost('Hello');

    let reduser = ProfileReduser(state, action);
    expect(reduser.userPostsData.length).toBe(3);

})

it('check text new post', ()=>{
    let action = createElementAddPost('Hello');

    let reduser = ProfileReduser(state, action);
    expect(reduser.userPostsData[2].messegest).toBe('Hello');

})

it('delet post', ()=>{
    let action = deletePost(1);

    let reduser = ProfileReduser(state, action);
    expect(reduser.userPostsData.length).toBe(1);
    expect(reduser.userPostsData[0].messegest).toBe('How are you?');

})