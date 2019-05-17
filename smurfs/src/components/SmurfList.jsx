import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() { 
    return (
      <div className='SmurfList'>
        {
          this.props.smurfs.map(smurf => (
            <div>{smurf.name}</div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
});
 
export default connect(mapStateToProps, { getSmurfs })(SmurfList);