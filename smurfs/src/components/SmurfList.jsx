import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() { 
    return (
      <div className='SmurfList'>
        {
          this.props.smurfs.map(smurf => (
            <Smurf {...smurf} />
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