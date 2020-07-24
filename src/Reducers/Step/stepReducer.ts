import { UPDATE_STEP } from './stepActions';

type StepState = number;

const step = localStorage.getItem('step');
const defaultStep = step ? Number(step) : 0;

const defaultStepState = defaultStep;

type Action = Readonly<{ type: 'UPDATE_STEP'; payload: number }>;

export const stepReducer = (
  state: StepState = defaultStepState,
  action: Action
): StepState => {
  switch (action.type) {
    case UPDATE_STEP:
      return action.payload;
    default:
      return state;
  }
};
