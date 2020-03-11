import React,{ Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import {connect} from 'react-redux';
import * as actionCreater from './store/actionCreater';
import {Redirect} from 'react-router-dom';
class LogIn extends Component {
  render() {
    const {handleLogIn, show_logIn} = this.props;
    if(!show_logIn) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder = "帐号" ref={(input) => {this.userName = input}}/>
            <Input placeholder = "密码" type='password' ref={(input) => {this.userPassWord = input}}/>
            <Button onClick = {() => handleLogIn(this.userName, this.userPassWord)}>登录</Button> 
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
    
  }
}

const mapStateToProps = (state) => ({
  show_logIn: state.getIn(['login', 'show_logIn'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLogIn(name, password) {
    dispatch(actionCreater.userLogIn(name,password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)