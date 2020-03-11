import * as actionType from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeHome = (data) => ({
  type: actionType.GET_LIST,
  topicList: data.topicList,
  articleList: data.articleList,
  recommentList: data.recommentList,
  witerList: data.witerList
});

const getMore = (list, pages) => ({
  type: actionType.GET_MORE_LIST,
  list: fromJS(list.articleList),
  pages
});

export const getHomeListItem = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(changeHome(data))
    }).catch(() => {
      console.log('error')
    })
  }
};

export const getMoreList = (pages) => {
  return (dispatch) => {
    axios.get('./api/homeList.json?pages=' + pages).then((res) => {
      const list = res.data.data;
      dispatch(getMore(list, pages))
    }).catch(() => {
      console.log('error')
    })
  }
};

export const showscroll = (show) => ({
  type: actionType.SHOW_SCROLL,
  show
});


  