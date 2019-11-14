import React, { useState } from 'react';
import './App.css';
import CounterPlus from './CounterPlus'
import CounterMinus from './CounterMinus';
import UserInput from './UserInput';

function App() {
  const[count, setCount] = useState(0)

  const handlePlusClick = () => {
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    setCount(count - 1)
  }

  const handleInitialCount = (userInput) => {
    setCount(userInput)
  }

  return (
    <div className="App">
      <p> The value of count is: {count}</p>
      <CounterPlus onClick={handlePlusClick} />
      <CounterMinus onClick={handleMinusClick} />
      <UserInput handleInitialCount={handleInitialCount}/>
    </div>
  );
}

export default App;
