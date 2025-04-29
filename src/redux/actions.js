import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const setStep = createAction('setStep');
export const reset = createAction('reset');
