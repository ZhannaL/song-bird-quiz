import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';
import unknown from 'styles/images/quiz-unknown.png';
import { useWindowSize } from 'hooks/WindowSizeContext';
import { Player } from '../Player';
import style from './mainBlock.module.css';

type Props = {
  audio: string;
  image: string;
  name: string;
  isAnswerCorrect: boolean;
};

const MainBlock = ({
  audio,
  image,
  name,
  isAnswerCorrect,
}: Props): JSX.Element => {
  const screenSize = useWindowSize();
  return (
    <Paper className={style.mainBlock}>
      {screenSize.width >= 600 ? (
        <>
          <div className={style.imgWrapp}>
            <img
              src={isAnswerCorrect ? image : unknown}
              alt="bird"
              className={style.img}
            />
          </div>
          <div className={style.audio}>
            <Typography
              color="primary"
              variant="h4"
              gutterBottom
              className={style.birdName}
            >
              {isAnswerCorrect ? name : '******'}
            </Typography>
            <Divider />
            <Player audio={audio} />
          </div>
        </>
      ) : (
        <>
          <div className={style.head}>
            <Typography
              color="primary"
              variant="h4"
              gutterBottom
              className={style.birdName}
            >
              {isAnswerCorrect ? name : '******'}
            </Typography>
            <div className={style.imgWrapp}>
              <img
                src={isAnswerCorrect ? image : unknown}
                alt="bird"
                className={style.img}
              />
            </div>
          </div>
          <div className={style.audio}>
            <Divider />
            <Player audio={audio} />
          </div>
        </>
      )}
    </Paper>
  );
};

export default MainBlock;
