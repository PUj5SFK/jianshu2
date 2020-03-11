import * as actionType from './constants';
import axios from 'axios';

const getItem = (value) => ({
  type: actionType.GET_CONTENT,
  title: value.title,
  content: value.content
});

export const getContent = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?=' + id).then((res) => {
      const value = res.data.data
      dispatch(getItem(value))
    }).catch(() => {
      console.log('error')
    });
  }
}