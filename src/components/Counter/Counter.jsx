import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, setStep } from '../../redux/counterSlice';

const Counter = () => {
  const value = useSelector(state => state.counter.value);
  const step = useSelector(state => state.counter.step);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeStep = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      dispatch(setStep(Number(value)));
    } else {
      alert('Please enter a valid number');
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>
        <h1>{value}</h1>
        <input
          value={step}
          type="text"
          className="input"
          onChange={handleChangeStep}
        />
        <div>
          <button className="button" onClick={handleIncrement}>
            Increment
          </button>
          <button className="button" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
