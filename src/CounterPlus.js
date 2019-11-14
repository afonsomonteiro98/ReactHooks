import React from 'react';

function CounterPlus({onClick}){
    return (
        <div>
          <button onClick={onClick}>
            +1
          </button>
        </div>
      );
}

export default CounterPlus