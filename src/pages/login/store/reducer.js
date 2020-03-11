import * as actionType from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  show_logIn: false
});

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.LOGIN_STATE:
      return state.set('show_logIn', action.value)
    case actionType.LOGOUT:
      return state.set('show_logIn', action.value)
    default: 
    return state
  }
};