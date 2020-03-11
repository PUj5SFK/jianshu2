import styled from 'styled-components';
import Logo_img from '../statics/nav_logo.png'
export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  z-index: 1;
`
export const HeaderWidth = styled.div`
  position:relative;
  width:1440px;
  height: 56px;
  margin: 0 auto;
`

export const Logo = styled.div`
  position: absolute;
  width: 100px;
  height: 56px;
  background-image: url(${Logo_img});
  background-size: contain;
`
export const NavWrapper = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  background-color: #fff;
  .NavItem {
    padding:14px;
    line-height: 26px;
  }
  .iconfont {
    margin-right:3px;
    font-size: 20px;
    font-weight: 600;
  }
`


export const NavItemLeft = styled.div.attrs({
  className: 'NavItem'
})`
  float:left;
  margin-right: 10px;
  font-size: 17px;
  color: #333;
  :hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: #fff;
    color: #ea6f5a;
  }
`
export const NavItemRight = styled.div.attrs({
  className: 'NavItem'
})`
  float:right;
  color: #969696;
  &.zs_bt {
    img {
      width:57px;
      height: 25px;
    }
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  top: 9px;
  float: left;
  .searchIcon {
    display: block;
    position: absolute;
    right: 0;
    top: 4px;
    width: 30px;
    height:30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    cursor: pointer;
    &.focused {
    color: #fff;
    background-color: #969696;
  }
  }
`
export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 240px;
  height: 38px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  background-color: #eee;
  border-radius: 40px;
  transition: width .2s ease-in;
  &.focused {
    width: 320px;
  }
  &::placeholder {
    font-size:12px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left:0;
  top:56px;
  width: 320px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border-radius:5px;
`;
export const SearchInfoTitle = styled.h2`
  margin-top: 10px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
  
`;
export const SearchInfoSwitch = styled.span`
float: right;
	font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
  }
`; 
export const SearchInfoItem = styled.span`
  display:block;
  float:left;
  border: 1px solid #ddd;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Btn = styled.div`
  float: left;
  box-sizing: border-box;
  margin-top: 9px;
  margin-right:15px;
  padding: 6px 12px;
  border: 1px solid #ec6149;
  color: #ec6149;
  border-radius: 20px;
  text-align: center;
  &.reg {
    width: 80px;
    height: 38px;
    line-height: 24px;
    cursor: pointer;
  }
  &.writing {
    width: 100px;
    height: 40px;
    background-color: #ea6f5a;
    color: #fff;
    line-height: 26px;
  }
`;
