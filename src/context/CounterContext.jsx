import { createContext, useState } from 'react';

export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => {
    if(prevCount === 0) {
      return 0;
    } else return (prevCount - 1);});
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
