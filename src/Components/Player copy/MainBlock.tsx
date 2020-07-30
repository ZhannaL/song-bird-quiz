import React, { useState, useEffect } from 'react';
import { Paper, Typography, IconButton } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import style from './mainBlock.module.css';

type Props = {
  audio: string;
  image: string;
  name: string;
};

const MainBlock = ({ audio, image, name }: Props): JSX.Element => {
  const playSound = new Audio(audio);
  const [playAudio] = useState(playSound);
  const [isPaused, setIsPaused] = useState(true);
  console.dir(playAudio);
  useEffect(() => {
    const handler = () => setIsPaused(true);
    playAudio.addEventListener('ended', handler);
    return () => playAudio.removeEventListener('ended', handler);
  }, [playAudio]);

  return (
    <Paper className={style.mainBlock}>
      <div className={style.imgWrapp}>
        <img src={image} alt="bird" className={style.img} />
      </div>
      <div>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          className={style.birdName}
        >
          {name}
        </Typography>
        <div className={style.audioBlock}>
          {isPaused ? (
            <IconButton
              color="primary"
              onClick={() => {
                playAudio.play();
                setIsPaused(false);
              }}
            >
              <PlayCircleFilledIcon />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              onClick={() => {
                playAudio.pause();
                setIsPaused(true);
              }}
            >
              <PauseCircleFilledIcon />
            </IconButton>
          )}
          <Typography
            color="initial"
            variant="h6"
            gutterBottom
            className={style.audioDuration}
          >
            {playAudio.duration}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default MainBlock;
