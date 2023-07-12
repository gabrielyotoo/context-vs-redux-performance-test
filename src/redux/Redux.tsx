import { increment } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

const Redux = () => {
  const dispatch = useDispatch();
  const counter = useSelector<RootState>((state) => state.counter.value);

  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Redux;
