const initialState = {
  counter: 1,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + state.step };
    case 'decrement':
      return { ...state, counter: state.counter - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
