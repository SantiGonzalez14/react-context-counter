import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterControls = () => {
  // Should Add useContext for increment, decrement here...
  const { increment, decrement } = useContext(CounterContext);
  return (
    <>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </>
  );
};

export default CounterControls;
