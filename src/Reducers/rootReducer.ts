import { combineReducers, StateFromReducersMapObject } from 'redux';
import { stepReducer } from './Step/stepReducer';

const reducers = {
  step: stepReducer,
};

const combinedReducer = combineReducers(reducers);

export const rootReducer = combinedReducer;
export type State = StateFromReducersMapObject<typeof reducers>;
