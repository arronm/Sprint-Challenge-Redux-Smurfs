import React from 'react';

const Smurf = (props) => {
  const onDeleteHandle = () => {
    props.onDeleteHandle(props.id);
  }
  return (
    <div className="Smurf">
      {props.name} is {props.age} years old and {props.height} tall
      <span className='delete' onClick={onDeleteHandle}>&times;</span>
    </div>
  );
}
 
export default Smurf;