import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      {props.name} is {props.age} years old and {props.height} tall
    </div>
  );
}
 
export default Smurf;