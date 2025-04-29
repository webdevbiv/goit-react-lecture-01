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

  const handleChangeStep = () => {
    // Logic to set the step value
    dispatch({ type: 'setStep', payload: step });
  };

  const handleReset = e => {
    // Logic to handle input change
    const value = e.target.value;
    if (!isNaN(value)) {
      dispatch({ type: 'setStep', payload: Number(value) });
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input
          value={step}
          type="text"
          className="input"
          onChange={handleReset}
        />
        <div>
          <button className="button" onClick={handleIncrement}>
            Increment
          </button>
          <button className="button" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="button" onClick={handleChangeStep}>
            Set Step
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
