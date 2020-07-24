import React from 'react';
import { useSelector } from 'react-redux';
import style from './AppContent.module.css';
import { Header } from './Components/Header';
import { Score } from './Components/Score';
import { Steps } from './Components/Steps';
import { stepsArray } from './birdsData';
import { NextStepButton } from './Components/NextStepButton';
import { State } from './Reducers/rootReducer';

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
        <NextStepButton isEnabled allSteps={stepsArray.length} />
      </div>
    </div>
  );
};

export default AppContent;
