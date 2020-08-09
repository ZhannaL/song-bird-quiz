import React, { useState, useEffect } from 'react';
import { MenuItem } from '@material-ui/core';
import style from './options.module.css';
import { BirdData, AnswerType } from '../../birdsData';

type Props = {
  option: BirdData;
  onClick: () => unknown;
  index: number;
  answer: number;
  isAnswerCorrect: boolean;
};

const getColor = (type: AnswerType): string | undefined => {
  switch (type) {
    case 'unanswered':
      return 'transparent';
    case 'wrong':
      return 'red';
    case 'correct':
      return 'green';
    default:
      ((_: never) => _)(type);
      throw new Error('unknown type');
  }
};

const Option = ({
  option,
  onClick,
  index,
  answer,
  isAnswerCorrect,
}: Props): JSX.Element => {
  const [answerType, setAnswerType] = useState<AnswerType>('unanswered');
  useEffect(() => setAnswerType('unanswered'), [option]);
  return (
    <MenuItem
      className={style.option}
      onClick={() => {
        onClick();
        if (!isAnswerCorrect) {
          setAnswerType(index === answer ? 'correct' : 'wrong');
        }
      }}
    >
      <svg height="30" width="40">
        <circle cx="15" cy="15" r="8" fill={getColor(answerType)} />
      </svg>
      {option.name}
    </MenuItem>
  );
};

export default Option;
