import { decrement, increment, reset, setStep } from './actions';

const initialState = {
  counter: 1,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type:
      return { ...state, counter: state.counter + state.step };
    case decrement.type:
      return { ...state, counter: state.counter - state.step };
    case setStep.type:
      return { ...state, step: action.payload };
    case reset.type:
      return { ...state, counter: 1, step: 1 };
    default:
      return state;
  }
};
