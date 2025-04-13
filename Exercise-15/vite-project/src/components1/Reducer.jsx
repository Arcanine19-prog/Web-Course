import React, { useReducer } from 'react';

const reducer = (state, action) => 
  action === 'increment' ? state + 1 : state - 1;

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => dispatch('increment')}>Increase</button>
      <br></br>
      <button onClick={() => dispatch('decrement')}>Decrease</button>
    </div>
  )
}

export default Counter;
