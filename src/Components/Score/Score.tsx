import React from 'react';
import Typography from '@material-ui/core/Typography';
import style from './score.module.css';

const Score = (): JSX.Element => {
  const score = 17;
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
