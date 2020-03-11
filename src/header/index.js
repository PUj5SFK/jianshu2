import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderWidth,
  Logo,
  NavWrapper,
  NavItemLeft,
  NavItemRight,
  SearchWrapper,
  SearchInput,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Btn,
} from './style';
import { connect } from 'react-redux';
import  { actionCreater } from './store';
import {actionCreater as LogInActionCreater } from '../pages/login/store'
import nav_zsbt from '../statics/nav_zsbt.png';
class Header extends Component {
  
  ccc() {
    const {handleMouseEnter, handleMouseLeave, handleItemSwitch, fcused, show, list, pages, totalPage} = this.props;
    const newList = [];
    if(list.size > 0) {
      for (let index = pages*10; index < (pages + 1) * 10; index++) {
        newList.push(<SearchInfoItem key = {list.toJS()[index]}>{list.toJS()[index]}</SearchInfoItem>)
      }
    }
    
    if(fcused || show) {
      return (
        <SearchInfo
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        >
          <SearchInfoTitle>热门项目
            <SearchInfoSwitch onClick = {() => handleItemSwitch(pages, totalPage, this.spin)}>
              换一批
              <i className="iconfont spin" ref = {(spin) => {this.spin = spin}}>&#xe851;</i>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {newList}
        </SearchInfo>
      )
    }
    
  }
  render() {
    const {handleInputFocused, handleInputBlur, fcused, list, show_logIn, logOut} = this.props;
    return (  
      <HeaderWrapper>
        <HeaderWidth>
          <Link to='/' >
            <Logo/>
          </Link>       
          <NavWrapper>
            <Link to = '/'>
          <NavItemLeft className = 'active'>
            <i className="iconfont">&#xe684;</i>
              首页
            </NavItemLeft>
          </Link>
          <Link to = '/download'>
            <NavItemLeft >
              <i className="iconfont">&#xe639;</i>下载App
            </NavItemLeft>
          </Link>
          {show_logIn?<Link to = '/'><NavItemRight onClick = {logOut}>退出</NavItemRight></Link>:<Link to = '/login'><NavItemRight>登录</NavItemRight></Link>}
          <NavItemRight className = 'zs_bt'>
            <img src={nav_zsbt} alt="" />
          </NavItemRight>
          <NavItemRight>
            <i className="iconfont">&#xe636;</i>
            </NavItemRight>
          <SearchWrapper>
            <SearchInput 
            onFocus = {() => handleInputFocused(list)}
            onBlur = {handleInputBlur}
            className = {fcused?'focused':''}
            />
            <i className= {fcused?"iconfont focused searchIcon":'iconfont searchIcon'}>&#xe61d;</i>
            {this.ccc()}
          </SearchWrapper>
        </NavWrapper>  
        <Addition>
          <Btn className = "reg">注册</Btn>
          <Link to='/write'>
            <Btn className = "writing">
            <i className="iconfont">&#xe600;</i>写文章
            </Btn>
          </Link>
        </Addition>
        </HeaderWidth>
      </HeaderWrapper>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    fcused: state.get('header').get('fcused'),
    show: state.get('header').get('show'),
    list: state.get('header').get('list'),
    pages: state.get('header').get('pages'),
    totalPage: state.get('header').get('totalPage'),
    show_logIn: state.get('login').get('show_logIn'),
  }
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    handleInputFocused(list) {
      if(list.size === 0) {
        dispatch(actionCreater.getList())
      } 
        dispatch(actionCreater.inputFocused())
    },
    handleInputBlur() {
      dispatch(actionCreater.inputBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreater.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreater.mouseLeave())
    },
    handleItemSwitch(pages, totalPage, spin) {
      // 这里不行，因为正则相关知识不会
      let currentAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (currentAngle) {
        currentAngle = parseInt(currentAngle, 10);
      } else {
        currentAngle = 0;
      }
      spin.style.transform = 'rotate('+  (currentAngle + 180)  + 'deg)';
      if(pages < totalPage - 1) {
        dispatch(actionCreater.itemSwitch(pages + 1))
      } else {
        dispatch(actionCreater.itemSwitch(0))
      } 
    },
    logOut() {
      dispatch(LogInActionCreater.logout());
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);
