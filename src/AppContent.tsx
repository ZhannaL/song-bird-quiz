import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Finish,
  Description,
  MainBlock,
  Header,
  Score,
  Steps,
  NextStepButton,
} from 'Components';
import { State } from 'Reducers/rootReducer';
import { Options } from 'Components/Options';
import { useUpdateScore } from 'Reducers/Score/scoreActions';
import { useWindowSize } from 'hooks/WindowSizeContext';
import { stepsArray, birdsData } from './birdsData';
import style from './AppContent.module.css';

const AppContent = (): JSX.Element => {
  const currentStep = useSelector((state: State) => state.step);
  const [birdIndexDescription, setBirdIndexDescription] = useState<
    number | null
  >(null);
  const [answer, setAnswer] = useState(
    Math.floor(Math.random() * stepsArray.length)
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const updateScore = useUpdateScore();
  const score = useSelector((state: State) => state.score);
  const [currentScore, setCurrentScore] = useState(5);

  const checkAnswer = (index: number) => {
    if (index === answer) {
      setIsAnswerCorrect(true);
      updateScore(score + currentScore);
      setCurrentScore(5);
    } else {
      setCurrentScore(currentScore - 1);
    }
    setBirdIndexDescription(index);
  };

  const screenSize = useWindowSize();

  return (
    <div className={style.App}>
      <header className={style.header}>
        <Header title="SongBird" />
        <Score />
      </header>

      <div className={style.mainContent}>
        {currentStep === birdsData.length ? (
          <Finish />
        ) : (
          <>
            <Steps
              activeStep={currentStep}
              steps={stepsArray}
              onSetAnswer={() => {
                setAnswer(Math.floor(Math.random() * stepsArray.length));
                setBirdIndexDescription(null);
                setIsAnswerCorrect(false);
              }}
              isAnswerCorrect={isAnswerCorrect}
            />
            <MainBlock
              isAnswerCorrect={isAnswerCorrect}
              name={birdsData[currentStep][answer].name}
              audio={birdsData[currentStep][answer].audio}
              image={birdsData[currentStep][answer].image}
            />
            <Options
              options={birdsData[currentStep]}
              onOptionSelected={(index) => {
                checkAnswer(index);
              }}
              answer={answer}
              isAnswerCorrect={isAnswerCorrect}
            />
            <Description
              data={
                birdIndexDescription === null
                  ? birdIndexDescription
                  : birdsData[currentStep][birdIndexDescription]
              }
            />
            {screenSize.width >= 600 ? (
              <NextStepButton
                isEnabled={isAnswerCorrect}
                allSteps={stepsArray.length}
                onSetAnswer={() => {
                  setAnswer(Math.floor(Math.random() * stepsArray.length));
                  setBirdIndexDescription(null);
                  setIsAnswerCorrect(false);
                }}
              />
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default AppContent;
