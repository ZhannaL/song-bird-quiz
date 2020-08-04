import React from 'react';
import { Paper, Divider, Typography } from '@material-ui/core';
import { BirdData } from '../../birdsData';
import style from './description.module.css';
import { Player } from '../Player';

type Props = {
  data: BirdData;
};

const Description = ({ data }: Props): JSX.Element => {
  return (
    <Paper className={style.description}>
      <div className={style.head}>
        <div className={style.imgWrapp}>
          <img src={data.image} alt="bird" className={style.img} />
        </div>
        <div className={style.audio}>
          <Typography
            color="primary"
            variant="h4"
            gutterBottom
            className={style.birdName}
          >
            {data.name}
          </Typography>
          <Divider />
          <Typography
            color="inherit"
            variant="h6"
            gutterBottom
            className={style.species}
          >
            {data.species}
          </Typography>
          <Divider />
          <Player audio={data.audio} />
        </div>
      </div>
      <Typography
        color="inherit"
        variant="body2"
        gutterBottom
        className={style.description}
      >
        {data.description}
      </Typography>
    </Paper>
  );
};

export default Description;
