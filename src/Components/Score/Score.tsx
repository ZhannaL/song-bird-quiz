import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { State } from 'Reducers/rootReducer';
import style from './score.module.css';

const Score = (): JSX.Element => {
  const score = useSelector((state: State) => state.score);
  return (
    <Typography
      color="initial"
      variant="h5"
      gutterBottom
      className={style.score}
    >
      Score: {score}
    </Typography>
  );
};

export default Score;
