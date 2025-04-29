import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Logic to increment the counter
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    // Logic to decrement the counter
    dispatch({ type: 'decrement' });
  };

  const handleChangeStep = e => {
    // Logic to set the step value
    const value = e.target.value;
    if (!isNaN(value)) {
      dispatch({ type: 'setStep', payload: Number(value) });
    } else {
      alert('Please enter a valid number');
    }
  };

  const handleReset = () => {
    // Logic to handle input change
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
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
