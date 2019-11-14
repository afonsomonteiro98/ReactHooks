import React from 'react';

function CounterMinus({onClick}){
    return (
        <div>
          <button onClick={onClick}>
            -1
          </button>
        </div>
      );
}

export default CounterMinus