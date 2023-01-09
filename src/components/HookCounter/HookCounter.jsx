import React, { useState, useEffect, useRef } from 'react';
import useCounter from './useCounter';
import './HookCounter.css';

function ErrorMessage({ message }) {
  return <div className="error-message">{message}</div>;
}

function HookCounter() {
  const [count, increment, decrement, reset, set] = useCounter();
  const [error, setError] = useState('');
  const inputRef = useRef();

  const setErrorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 30000);
  };

  useEffect(() => {
    window.addEventListener('error', (event) => {
      setErrorMessage(event.error.message);
    });
  }, []);

  const handleSetClick = () => {
    const value = inputRef.current.value;
    try {
      set(value);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      {error && <ErrorMessage message={error} />}
      <div className="main-card">
        <h2>customHook Counter</h2>
        <button className="main-btn-i" onClick={increment}>
          +
        </button>
        <p className="counter">{count}</p>
        <button className="main-btn-d" onClick={decrement}>
          -
        </button>
        <div className="extra-card">
          <button className="extra-btn-re" onClick={reset}>
            Reset
          </button>
          <br />
          <input ref={inputRef} type="number" />
          <button className="extra-btn-se" onClick={handleSetClick}>
            Set Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default HookCounter;
