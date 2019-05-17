import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';
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
            <Smurf {...smurf} key={smurf.id} onDeleteHandle={this.props.deleteSmurf} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
});
 
export default connect(mapStateToProps, {
  getSmurfs,
  deleteSmurf
})(SmurfList)