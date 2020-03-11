import {fromJS} from 'immutable';
import * as actionType from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommentList:[],
  witerList:[],
  pages:0,
  showScroll: false
});

export default (state = defaultState,action) => {
  switch(action.type){
    case actionType.GET_LIST:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommentList: fromJS(action.recommentList),
        witerList: fromJS(action.witerList)
      });
    case actionType.GET_MORE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        pages: action.pages
      });
    case actionType.SHOW_SCROLL:
      return state.set('showScroll',action.show);
    default:
      return state;
  }
};