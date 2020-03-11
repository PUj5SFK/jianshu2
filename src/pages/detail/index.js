import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { actionCreater } from './store';
import {
  DetailWrapper,
  Content
} from './style';

class Detail extends Component {
  render() {
    console.log(this.props.match.params.id)
    const {title, content} = this.props
    return (
    <DetailWrapper>
      <h1 className = 'tiltle'>{title}</h1>
      <Content dangerouslySetInnerHTML = {{__html: content}}></Content>
    </DetailWrapper>)
  }
  componentDidMount() {
    this.props.getContent(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
});

const mapDispatchToProps = (dispatch) => ({
  getContent(id) {
    dispatch(actionCreater.getContent(id))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail);