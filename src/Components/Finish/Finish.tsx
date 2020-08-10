import React from 'react';
import { Paper, Divider, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useUpdateScore } from 'Reducers/Score/scoreActions';
import { State } from 'Reducers/rootReducer';
import { useUpdateStep } from 'Reducers/Step/stepActions';
import style from './finish.module.css';

const getText = (score: number): string | undefined => {
  switch (true) {
    case score === 0:
      return "Sorry, but you haven't guessed any birds...";
    case score < 10:
      return 'Nice try! Read more about birds';
    case score < 20:
      return 'Nice try! Keep going!';
    case score < 30:
      return 'Cool! Good job!';
    case score >= 30:
      return 'Amazing! You are bird expert!';
    default:
      throw new Error('unknown score');
  }
};

const Finish = (): JSX.Element => {
  const updateStep = useUpdateStep();
  const updateScore = useUpdateScore();
  const score = useSelector((state: State) => state.score);
  return (
    <Paper className={style.finish}>
      <Typography color="inherit" variant="h2" gutterBottom>
        {score === 0 ? 'OOPS!' : 'Congratulations!'}
      </Typography>
      <Divider />
      <Typography color="inherit" variant="h4" gutterBottom>
        Your result is {score} of 30
      </Typography>
      <Typography color="inherit" variant="h5" gutterBottom>
        {getText(score)}
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
