import React from 'react';

function UserInput({handleInitialCount}){
    const onChange = (e) => {
        handleInitialCount(Number(e.target.value))
    }
    
    return (
        <div>
          <input type="text" onChange={onChange} />
        </div>
      );
}

export default UserInput