import React, { useReducer } from 'react';
// Init state:0
const initState = 0;
// ACtions:UP Down
const ACTION_UP = 'up';
const ACTION_DOWN = 'down';
// Reducer
const reducer = (state, action) => {
  console.log('dispatch');
  switch (action) {
    case ACTION_UP:
      return state + 1;

    case ACTION_DOWN:
      return state - 1;

    default:
      throw new Error('Error message...');
  }
};
// Dispatch
export default function Updown() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(ACTION_DOWN)}>Down</button>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch('error')}>Error</button>
    </div>
  );
}
