const AddMessagest = 'ADD-MESSAGEST';

let InitialState = {
    userData: [
        { name: 'Dima', id: 1 },
        { name: 'Zina', id: 2 },
        { name: 'Alla', id: 3 },
        { name: 'Maks', id: 4 },
        { name: 'Viktor', id: 5 }
    ],
    userMessagestData: [
        { text: 'My messagest', id: 1 },
        { text: 'Hello World', id: 2 },
        { text: 'How are you?', id: 3 },
        { text: 'Are you busy', id: 4 }
    ],

};

const MessagestReduser = (state = InitialState, action) => {
    let copyState = {
        ...state,
        userMessagestData: [...state.userMessagestData]
    };
    let newMessagest = {
        text: action.text,
        id: 5
    };

    switch (action.type) {
        case AddMessagest:
            copyState.userMessagestData.push(newMessagest)
            return copyState;

        default:
            return copyState;
    }


};


export const createElementAddMessagest = (text) => ({ type: AddMessagest, text });

export default MessagestReduser;
