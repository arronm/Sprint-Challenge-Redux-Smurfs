import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.postSmurf({...this.state});
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='SmurfForm'>
        <input
          name='name'
          value={this.state.name}
          placeholder='Smurf Name'
          onChange={this.onChangeHandler}
        />
        <input
          name='age'
          value={this.state.age}
          placeholder='Smurf Age'
          onChange={this.onChangeHandler}
        />
        <input
          name='height'
          value={this.state.height}
          placeholder='Smurf Height'
          onChange={this.onChangeHandler}
        />
        <input type="submit" value="Add Smurf"/>
      </form>
    );
  }
}
 
export default connect(null, { postSmurf })(SmurfForm);