import * as actionType from './constants';
import axios from 'axios';

const changeLogIn = () => ({
  type: actionType.LOGIN_STATE,
  value: true
})
export const userLogIn = (name,password) => {
  return (dispatch) => {
    axios.get('./api/login.json?/userName=' + name + 'password=' + password).then((res) => {
      const data = res.data.data;
      if(data) {
        dispatch(changeLogIn())
      }
    })
  }
};

export const logout = () => ({
  type: actionType.LOGOUT,
  value: false
});