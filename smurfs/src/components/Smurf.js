import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            <h1>Name: {props.smurf.name} </h1>
            <h2>age: {props.smurf.age} </h2>
            <h2>height: {props.smurf.height} </h2>
        </div>
    )
}

export default Smurf;