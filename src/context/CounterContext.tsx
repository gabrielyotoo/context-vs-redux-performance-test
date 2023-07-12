import React, { useState } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterContextType | undefined>(
  undefined
);

interface CounterProviderProps {
  children: React.ReactNode;
}

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const counterContextValue: CounterContextType = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
