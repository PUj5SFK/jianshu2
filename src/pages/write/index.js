import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { WriteWritter } from './style';

class Write extends Component {
  render() {
    const { show_logIn } = this.props;
    if(show_logIn) {
      return (
        <WriteWritter></WriteWritter>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = (state) => ({
  show_logIn: state.getIn(['login', 'show_logIn'])
});

export default connect(mapStateToProps, null)(Write)