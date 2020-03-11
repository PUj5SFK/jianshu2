import { fromJS } from 'immutable';

import * as actionType from './constants';

const defaultState = fromJS({
  fcused: false,
  show:false,
  list:[],
  pages:0,
  totalPage: 0,
  showColor: false
})

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.INPUT_FOCUS:
      return state.set('fcused',true)
    case actionType.INPUT_BLUR:
      return state.set('fcused',false)
    case actionType.MOUSE_ENTER:
      return state.set('show',true)
    case actionType.MOUSE_LEAVE:
      return state.set('show',false)
    case actionType.GET_LIST:
      return state.set('list',action.data).set('totalPage',action.totalPage)
    case actionType.ITEM_SWITCH:
      return state.set('pages',action.pages)
    case actionType.HOME_CLICK_ACTIVE:
      return state.set('showColor',action.value)
    case actionType.DOWNLOAD_CLICK_ACTIVE:
      return state.set('showColor',action.value)
    default:
      return state
  } 
} 