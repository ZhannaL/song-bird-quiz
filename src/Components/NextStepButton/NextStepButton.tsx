import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import style from './nextStepButton.module.css';
import { useUpdateStep } from '../../Reducers/Step/stepActions';
import { State } from '../../Reducers/rootReducer';

type Props = {
  isEnabled: boolean;
  allSteps: number;
};

const NextStepButton = ({ isEnabled, allSteps }: Props): JSX.Element => {
  const updateStep = useUpdateStep();
  const currentStep = useSelector((state: State) => state.step);
  return (
    <Button
      variant="contained"
      disabled={!isEnabled}
      color="primary"
      className={style.nextStepButton}
      onClick={() => updateStep(allSteps > currentStep ? currentStep + 1 : 0)}
    >
      Next Step
    </Button>
  );
};

export default NextStepButton;
