import React from 'react';
import { Paper, MenuItem, Divider } from '@material-ui/core';
import { BirdData } from '../../birdsData';
import style from './options.module.css';

type Props = {
  options: ReadonlyArray<BirdData>;
};

const Options = ({ options }: Props): JSX.Element => {
  return (
    <Paper className={style.options}>
      {options.map((el, ind) => (
        <>
          <MenuItem
            key={el.id}
            className={style.option}
            // onClick={handleClose}
          >
            {el.name}
          </MenuItem>
          {ind !== options.length - 1 ? <Divider /> : <></>}
        </>
      ))}
    </Paper>
  );
};

export default Options;
