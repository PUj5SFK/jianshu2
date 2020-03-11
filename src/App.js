import React from 'react';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont.js';
import Header from './header';
import Home from './pages/home';
import Detail from './pages/detail';
import LogIn from './pages/login';
import Download from './pages/download';
import Write from './pages/write';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <Router>
        <Header/>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/detail/:id' component = {Detail}/>
          <Route path = '/download' exact component = {Download}/>
          <Route path = '/login' exact component = {LogIn}/>
          <Route path = '/write' exact component = {Write}/>
        </Router>
        <GlobalStyleIcon/>
        <GlobalStyle/>
      </Provider>
  );
}

export default App;
