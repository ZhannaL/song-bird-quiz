import React from 'react';
import { useSelector } from 'react-redux';
import { Description } from './Components/Description';
import { MainBlock } from './Components/MainBlock';
import style from './AppContent.module.css';
import { Header } from './Components/Header';
import { Score } from './Components/Score';
import { Steps } from './Components/Steps';
import { stepsArray, birdsData } from './birdsData';
import { NextStepButton } from './Components/NextStepButton';
import { State } from './Reducers/rootReducer';
import { Options } from './Components/Options';

const AppContent = (): JSX.Element => {
  const currentStep = useSelector((state: State) => state.step);
  return (
    <div className={style.App}>
      <header className={style.header}>
        <Header title="SongBird" />
        <Score />
      </header>

      <div className={style.mainContent}>
        <Steps activeStep={currentStep} steps={stepsArray} />
        {currentStep === birdsData.length ? (
          <div> congrats </div>
        ) : (
          <>
            <MainBlock
              name={birdsData[currentStep][3].name}
              audio={birdsData[currentStep][3].audio}
              image={birdsData[currentStep][3].image}
            />
            <Options options={birdsData[currentStep]} />
            <Description data={birdsData[currentStep][3]} />
          </>
        )}
        <NextStepButton isEnabled allSteps={stepsArray.length} />
      </div>
    </div>
  );
};

export default AppContent;
