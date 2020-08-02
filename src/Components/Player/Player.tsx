import React, { useState, useEffect } from 'react';
import { Typography, IconButton, Slider } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import style from './player.module.css';
import { getMinSecTime } from './PlayersHelpers';

type Props = {
  audio: string;
};

const Player = ({ audio }: Props): JSX.Element => {
  const playSound = new Audio(audio);
  const [playAudio] = useState(playSound);
  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // console.dir(currentTime);
  useEffect(() => {
    const handlerEnded = () => setIsPaused(true);
    const handlerDuration = () => setDuration(playAudio.duration);
    const handlerCurrentTime = () => setCurrentTime(playAudio.currentTime);

    playAudio.addEventListener('ended', handlerEnded);
    playAudio.addEventListener('loadedmetadata', handlerDuration);
    playAudio.addEventListener('timeupdate', handlerCurrentTime);

    return () => {
      playAudio.removeEventListener('ended', handlerEnded);
      playAudio.removeEventListener('loadedmetadata', handlerDuration);
      playAudio.removeEventListener('timeupdate', handlerCurrentTime);
    };
  }, [playAudio]);

  return (
    <div className={style.audioBlock}>
      {isPaused ? (
        <IconButton
          className={style.button}
          color="primary"
          onClick={() => {
            playAudio.play();
            setIsPaused(false);
          }}
        >
          <PlayCircleFilledIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton
          className={style.button}
          color="primary"
          onClick={() => {
            playAudio.pause();
            setIsPaused(true);
          }}
        >
          <PauseCircleFilledIcon fontSize="large" />
        </IconButton>
      )}
      <Slider
        value={currentTime}
        onChange={(event, newValue: number | number[]) => {
          setCurrentTime(Math.ceil(Number(newValue)));
          playAudio.currentTime = Number(newValue);
        }}
        step={1}
        min={0}
        max={duration}
        valueLabelDisplay="auto"
        valueLabelFormat={getMinSecTime}
      />
      <Typography
        color="initial"
        variant="h6"
        gutterBottom
        className={style.audioDuration}
      >
        {getMinSecTime(duration)}
      </Typography>
    </div>
  );
};

export default Player;