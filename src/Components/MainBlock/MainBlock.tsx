import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';
import { Player } from '../Player';
import style from './mainBlock.module.css';

type Props = {
  audio: string;
  image: string;
  name: string;
};

const MainBlock = ({ audio, image, name }: Props): JSX.Element => {
  return (
    <Paper className={style.mainBlock}>
      <div className={style.imgWrapp}>
        <img src={image} alt="bird" className={style.img} />
      </div>
      <div className={style.audio}>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          className={style.birdName}
        >
          {name}
        </Typography>
        <Divider />
        <Player audio={audio} />
      </div>
    </Paper>
  );
};

export default MainBlock;
