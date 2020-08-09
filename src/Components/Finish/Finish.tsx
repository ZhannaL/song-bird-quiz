import React from 'react';
import { Paper, Divider, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useUpdateScore } from 'Reducers/Score/scoreActions';
import { State } from 'Reducers/rootReducer';
import { useUpdateStep } from 'Reducers/Step/stepActions';
import style from './finish.module.css';

const Finish = (): JSX.Element => {
  const updateStep = useUpdateStep();
  const updateScore = useUpdateScore();
  const score = useSelector((state: State) => state.score);
  return (
    <Paper className={style.finish}>
      <Typography
        color="inherit"
        variant="h2"
        gutterBottom
        className={style.congrats}
      >
        Congratulations!
      </Typography>
      <Divider />
      <Typography
        color="inherit"
        variant="h5"
        gutterBottom
        className={style.score}
      >
        Your result is {score} of 30
      </Typography>

      <Button
        variant="contained"
        color="primary"
        className={style.finishButton}
        onClick={() => {
          updateStep(0);
          updateScore(0);
        }}
      >
        Try again
      </Button>
    </Paper>
  );
};

export default Finish;
