import React from 'react';
import { Paper, createStyles, makeStyles, Theme } from '@material-ui/core';
import classnames from 'classnames';
import style from './steps.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    step: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    active: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
  })
);

type Props = {
  steps: ReadonlyArray<string>;
  activeStep: number;
};

const Steps = ({ steps, activeStep }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={style.steps}>
      {steps.map((el, ind) => (
        <Paper
          key={el}
          className={classnames(
            style.step,
            activeStep === ind ? classes.active : '',
            classes.step,
            ind === 0 ? style.first : '',
            ind === steps.length - 1 ? style.last : ''
          )}
        >
          {el}
        </Paper>
      ))}
    </div>
  );
};

export default Steps;
