import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper, useWrappedStore } from 'next-redux-wrapper'
import repos from './slices/repos'

const combinedReducer = combineReducers({
  repos,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      repos: [...action.payload.repos.repos]
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);