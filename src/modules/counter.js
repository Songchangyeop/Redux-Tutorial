import { createSlice } from '@reduxjs/toolkit';

// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

// const initialState = {
//   number: 0,
// };

// const counter = createReducer(initialState, {
//   [INCREASE]: (state, action) => ({ number: state.number + 1 }),
//   [DECREASE]: (state, action) => ({ number: state.number - 1 }),
// });

const counter = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
  },
  reducers: {
    increase: (state, action) => ({ number: state.number + 1 }),
    decrease: (state, action) => ({ number: state.number - 1 }),
  },
});

export const { increase, decrease } = counter.actions;

export default counter.reducer;
