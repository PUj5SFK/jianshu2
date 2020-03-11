import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {actionCreator} from '../store';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  Loadmore
} from '../style';

class List extends PureComponent {
  render() {
    const {list, pages, getMoreList} = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem  key = {item.get('id')}>
                <img 
                className = 'list-pic' 
                src = {item.get('imgUrl')}
                alt=''
                />
                <ListInfo>
                  <Link to ={'/detail/' + item.get('id')} >
                  <h3 className = "title">{item.get('title')}</h3>
                  </Link>
                  <p className = 'art'>{item.get('abstract')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <Loadmore onClick = {() => getMoreList(pages)}>加载更多</Loadmore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','articleList']),
  pages: state.getIn(['home','pages'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(pages) {
    dispatch(actionCreator.getMoreList(pages + 1))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);