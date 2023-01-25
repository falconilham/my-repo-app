import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  repos: []
};


const slice = createSlice({
  name: 'data-repo',
  initialState,
  reducers: {
    setRepo(state, action) {
      state.repos = action.payload
    }
  }
});
export const { setRepo } = slice.actions
export default slice.reducer;

