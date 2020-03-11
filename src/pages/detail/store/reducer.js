import * as actionType from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content:''
});

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.GET_CONTENT:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default: 
    return state
  }
};