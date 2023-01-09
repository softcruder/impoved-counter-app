import { useState, useEffect } from 'react';

/**
 * Custom hook that implements a counter with the following features:
 *  - Increment: increases the count by a specified value
 *  - Decrement: decreases the count by a specified value
 *  - Reset: sets the count to its initial value
 *  - Set: sets the count to a specified value
 *
 * @param {number} initialCount - The initial count value (default: 0)
 * @param {number} value - The increment/decrement value (default: 1)
 * @return {array} An array containing the count value, and the four functions
 */
function useCounter(initialCount = 0, value = 1) {
  const [count, setCount] = useState(initialCount);
  const [error, setError] = useState('0');

  // Add a function to set the error message and start a timer to clear it
  const setErrorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 30000);
  };

  // Add an event listener to the window object to listen for the "error" event
  useEffect(() => {
    window.addEventListener('error', (event) => {
      setErrorMessage(event.error.message);
    });
  }, []);

  /**
   * Increments the count by the specified value
   */
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  /**
   * Decrements the count by the specified value
   */
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  /**
   * Resets the count to its initial value
   */
  const reset = () => {
    setCount(initialCount);
  };

  /**
   * Sets the count to the specified value
   *
   * @param {number} inputValue - The value to set the count to
   */
  const set = (inputValue) => {
    const value = Number(inputValue);
    if (isNaN(value)) {
      // Value is not a number, throw an error
      throw new Error('Value is not a number');
    }
    setCount(value);
  };

  return [count, increment, decrement, reset, set];
}

export default useCounter;
