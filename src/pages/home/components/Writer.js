import React,{ PureComponent } from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterItem} from '../style';

class Writer extends PureComponent {
  render() {
    const {list} = this.props;
    return (
    <WriterWrapper>
      <div className = 'title'>
        <span>推荐作者</span>
        <i className="iconfont spin">&#xe851;换一批</i>
      </div>
      {
        list.map((item) => {
          return (
            <WriterItem key ={item.get('id')}>
                <img className = 'write-img' src= {item.get('imgUrl')} alt=""/>
                <div className = "addition">
                <span className = "name">{item.get('name')}</span>
                <p>{item.get('numer')}</p>
              </div>
              <span href="#" className = "follow" alt="">+关注</span>
           </WriterItem>
          )
        })
      }
      <span className = 'all'>查看全部</span>
    </WriterWrapper>)
  }
};

const mapStateToProps = (state) => ({
  list: state.get('home').get('witerList')
});

export default connect(mapStateToProps,null)(Writer);