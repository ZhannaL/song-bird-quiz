import { combineReducers, StateFromReducersMapObject } from 'redux';
import { stepReducer } from './Step/stepReducer';
import { scoreReducer } from './Score/scoreReducer';

const reducers = {
  step: stepReducer,
  score: scoreReducer,
};

const combinedReducer = combineReducers(reducers);

export const rootReducer = combinedReducer;
export type State = StateFromReducersMapObject<typeof reducers>;
