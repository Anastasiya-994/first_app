
it('check lenght', ()=>{
    let action = createElementAddPost('Hello');

    let reduser = ProfileReduser(state, action);
    expect(reduser.userPostsData.length).toBe(3);

})