import * as actionType from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const listItem = (data) => ({
  type: actionType.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const inputFocused = () => ({
  type: actionType.INPUT_FOCUS
});

export const inputBlur = () => ({
  type: actionType.INPUT_BLUR
});

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})

export const getList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      const data = res.data
      dispatch(listItem(data.data))
    })
  }
}

export const itemSwitch = (pages) => ({
  type: actionType.ITEM_SWITCH,
  pages,
})

