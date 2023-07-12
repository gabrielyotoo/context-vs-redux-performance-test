import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter: React.FC = () => {
  const counterContext = useContext(CounterContext);
  if (!counterContext) {
    // Handle the case where the context is undefined
    return null;
  }

  const { count, increment } = counterContext;

  return (
    <div>
      <h1>Context</h1>
      <button onClick={() => increment()}>Increment</button>
      <p>Counter: {count}</p>
    </div>
  );
};

export default Counter;
