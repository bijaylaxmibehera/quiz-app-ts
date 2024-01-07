import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData.content';
import { Score } from './components/Score';
import { checkAnswer } from './utils/commonFunction';
import { AppState } from './reducer/quizReducer.type';
import { quizReducer } from './reducer/quizReducer';
import { useTheme } from './context/ThemeContext';

export const initialState:AppState ={
  quizData:quizData,
  currentQuestionIndex:0,
  score:0
}

const App : React.FC=()=>{
  const [state,dispatch]=useReducer(quizReducer,initialState);
  const {theme,toggleTheme}=useTheme();
  return (
    <div className="App">
      <div className={theme==="light"?"light-mode":"dark-mode"}>
      <Header title='Quiz app'/>
     {state.currentQuestionIndex < state.quizData.length ? (
      <Quiz quiz={state.quizData[state.currentQuestionIndex]} onOptionClick={(selectedOption)=>dispatch({type:'ATTEMPTED', selectedOption})}/>
     ):(<Score 
     currentScore={state.score}
     totalScore={state.quizData.length}
     onReset={()=>dispatch({type:'RESET'})}/>)}

     <button onClick={toggleTheme}>Change theme</button>
      </div>
  
    </div>
  );
}



export default App;
