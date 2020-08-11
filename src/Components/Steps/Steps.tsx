import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import style from './steps.module.css';

type Props = {
  steps: ReadonlyArray<string>;
  activeStep: number;
};

const Steps = ({ steps, activeStep }: Props): JSX.Element => {
  return (
    <div className={style.steps}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Steps;
