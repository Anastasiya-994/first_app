import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import ProfileConteiner from './components/Profile/ProfileConteiner';
//import MessagestConteiner from './components/Messagest/MessagestConteiner';
//import UsersConteiner from './components/Users/UsersConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import LoginConteinerConnect from './components/Login/LoginConteiner';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IniTionlaseThunk } from '../src/components/state/app-reducer'
import classes from '../src/components/Users/Users.module.css';
import loading from '../src/Other/loading/loading.gif';

const MessagestConteiner = React.lazy(() => import('./components/Messagest/MessagestConteiner'));
const UsersConteiner = React.lazy(() => import('./components/Users/UsersConteiner'));

class App extends React.Component {
  componentDidMount() {
    this.props.IniTionlaseThunk();

  };

  render() {

    if (!this.props.initionlase) return <img src={loading} className={classes.loading} />

    return (<BrowserRouter>
      <div className='app-wrapper'>
        <HeaderConteiner />
        <Navbar />
        <div className='profile'>
          <Route path='/profile/:userId?' >
            <ProfileConteiner />
          </Route>
          <Route path='/messagest'>
            <Suspense fallback={<div>Загрузка...</div>}>
              <MessagestConteiner />
            </Suspense>
          </Route>
          <Route path='/users'>
            <Suspense fallback={<div>Загрузка...</div>}>
              <UsersConteiner />
            </Suspense>
          </Route>
          <Route path='/login'>
            <LoginConteinerConnect />
          </Route>
        </div>
      </div>
    </BrowserRouter>)
  };
}

const mapStateToProps = (state) => {
  return {
    initionlase: state.app.initionlase
  }
}

export default compose(
  connect(mapStateToProps, { IniTionlaseThunk })
)(App);
