import { combineReducers } from 'redux';
import { repoReducers } from './slices/repos'


const rootReducer = combineReducers({
  repos: repoReducers
});

export { rootReducer };
