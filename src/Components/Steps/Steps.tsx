import React from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  MobileStepper,
} from '@material-ui/core';
import { useWindowSize } from 'hooks/WindowSizeContext';
import style from './steps.module.css';

type Props = {
  steps: ReadonlyArray<string>;
  activeStep: number;
};

const Steps = ({ steps, activeStep }: Props): JSX.Element => {
  const screenSize = useWindowSize();

  return (
    <Paper className={style.steps}>
      {screenSize.width >= 600 ? (
        <Stepper
          className={style.stepper}
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : (
        <>
          <Typography>{steps[activeStep]}</Typography>

          <MobileStepper
            className={style.mobileStepper}
            steps={steps.length}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={<></>}
            backButton={<></>}
          />
        </>
      )}
    </Paper>
  );
};

export default Steps;
