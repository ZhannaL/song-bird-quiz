import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import style from './options.module.css';
import { BirdData } from '../../birdsData';
import Option from './Option';

type Props = {
  options: ReadonlyArray<BirdData>;
  onOptionSelected: (option: number) => unknown;
  answer: number;
  isAnswerCorrect: boolean;
};

const Options = ({
  options,
  onOptionSelected,
  answer,
  isAnswerCorrect,
}: Props): JSX.Element => {
  return (
    <Paper className={style.options}>
      {options.map((el, ind) => (
        <div key={el.id}>
          <Option
            option={el}
            onClick={() => onOptionSelected(ind)}
            index={ind}
            answer={answer}
            isAnswerCorrect={isAnswerCorrect}
          />
          {ind !== options.length - 1 ? <Divider /> : <></>}
        </div>
      ))}
    </Paper>
  );
};

export default Options;
