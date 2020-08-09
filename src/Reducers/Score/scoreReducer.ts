import { UPDATE_SCORE } from './scoreActions';

type ScoreState = number;

const score = localStorage.getItem('score');
const defaultScore = score ? Number(score) : 0;

const defaultScoreState = defaultScore;

type Action = Readonly<{ type: 'UPDATE_SCORE'; payload: number }>;

export const scoreReducer = (
  state: ScoreState = defaultScoreState,
  action: Action
): ScoreState => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.payload;
    default:
      return state;
  }
};
