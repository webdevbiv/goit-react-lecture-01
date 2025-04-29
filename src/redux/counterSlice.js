import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += state.step;
    },
    decrement(state) {
      state.value -= state.step;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const { increment, decrement, setStep, reset } = counterSlice.actions;
export default counterSlice.reducer;
