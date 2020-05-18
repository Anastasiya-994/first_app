import {createElementAddMessagest} from '../state/messagest-reduser'
import Messagest from './Messagest';
import { connect } from 'react-redux';
import { AuthRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
import { MessagestPage } from './MessagestCelector';

const mapStateToProps=(state)=>{
    return{
        state: MessagestPage(state)
        
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addMessagest : (text)=>{dispatch(createElementAddMessagest(text))}
    };
};

const MessagestConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)(Messagest);


export default MessagestConteiner;