import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ProfileReduser from './profile-reduser';
import MessagestReduser from './messagest-reduser';
import UsersReduser from './users-reduser';
import AuthReduser from './auth';
import thunkMiddlewere from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './app-reducer';

let redusers = combineReducers({
    profilePage: ProfileReduser,
    messagestPage: MessagestReduser,
    usersPage: UsersReduser,
    auth: AuthReduser,
    form: formReducer,
    app: AppReducer    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddlewere)));

//let store = createStore(redusers, applyMiddleware(thunkMiddlewere));

export default store;