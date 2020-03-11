import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {

  handleScreen() {
    window.scroll(0,0);
  }

  render() {
    return (
      <HomeWrapper>
        <div className = "row">
          <HomeLeft>
            <img 
              className = "banner-img" 
              src = "https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
              alt=''
            />
          <Topic/>
          <List/>
          </HomeLeft>
          <HomeRight>
          <Recommend/>
          <Download/>
          <Writer/>
          </HomeRight>
        </div>
        {this.props.showScroll?<BackTop onClick ={this.handleScreen}>TOP</BackTop>:null} 
      </HomeWrapper>
    )
  };

  componentDidMount() {
    this.props.changeList();
    this.bindEvents()
  };

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.handleShowScroll)
  };

  bindEvents() {
    window.addEventListener('scroll',this.props.handleShowScroll)
  }
};

const mapSateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
});

const mapDispatchtoPorps = (dispatch) => ({
  changeList() {
    dispatch(actionCreator.getHomeListItem())
  },
  handleShowScroll() {
    document.documentElement.scrollTop > 100 ? dispatch(actionCreator.showscroll(true)) : dispatch(actionCreator.showscroll(false))
  }
});

export default connect(mapSateToProps,mapDispatchtoPorps)(Home);