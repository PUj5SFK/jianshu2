import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommentWrapper, RecommentItem } from '../style';

class Recomment extends PureComponent {
  render() {
    const {list} = this.props;
    return (
      <RecommentWrapper>
        {
          list.map((item) => {
            return (
              <RecommentItem 
              imgUrl = {item.get('imgUrl')}
              key = {item.get('id')}
              ></RecommentItem>
            )   
          })
        }
      </RecommentWrapper>
    )
  }
};


const mapStateToPorps = (state) => ({
  list: state.getIn(['home','recommentList'])
});

export default connect(mapStateToPorps,null)(Recomment);