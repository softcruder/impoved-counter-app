import React, { useState, useReducer } from 'react';
import './ReducerCounter.css';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    case 'set':
      return action.payload;
    default:
      return state;
  }
}

const ReducerCounter = ({ max= 100000000 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('0');

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleSet = (e) => {
    e.preventDefault();
    dispatch({ type: 'set', payload: +input });
    setInput('');
  };

  return (
    <div className="container">
      <div className="main-card">
      <h2>useReducer Counter</h2>
        <button
          className="main-btn-d"
          onClick={handleDecrement}
          disabled={state === 0}
        >
          -
        </button>
        <div className="counter">{state}</div>
        <button
          className="main-btn-i"
          onClick={handleIncrement}
          disabled={state === max}
        >
          +
        </button>
        <div className="extra-card">
          <button className="extra-btn-re" onClick={handleReset}>
            Reset
          </button>
          <form onSubmit={handleSet}>
            <input
              type="number"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Set Counter"
            />

            <button type="submit" className="extra-btn-se">
              Set Counter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReducerCounter;
