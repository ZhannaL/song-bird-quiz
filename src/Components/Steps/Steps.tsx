import React from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  MobileStepper,
  Button,
} from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { useWindowSize } from 'hooks/WindowSizeContext';
import { useUpdateStep } from 'Reducers/Step/stepActions';
import style from './steps.module.css';

type Props = {
  steps: ReadonlyArray<string>;
  activeStep: number;
  onSetAnswer: () => unknown;
  isAnswerCorrect: boolean;
};

const Steps = ({
  steps,
  activeStep,
  onSetAnswer,
  isAnswerCorrect,
}: Props): JSX.Element => {
  const screenSize = useWindowSize();
  const updateStep = useUpdateStep();
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
            nextButton={
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  updateStep(steps.length > activeStep ? activeStep + 1 : 0);
                  onSetAnswer();
                }}
                disabled={!isAnswerCorrect}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" disabled className={style.leftButton}>
                Back
                <KeyboardArrowRight />
              </Button>
            }
          />
        </>
      )}
    </Paper>
  );
};

export default Steps;
