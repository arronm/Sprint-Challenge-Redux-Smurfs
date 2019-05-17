import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() { 
    return (
      <div>
        Totally a smurfy list.
      </div>
    );
  }
}
 
export default connect(null, { getSmurfs })(SmurfList);