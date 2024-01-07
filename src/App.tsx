import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData.content';
import { Score } from './components/Score';
import { checkAnswer } from './utils/commonFunction';
import { AppState } from './reducer/quizReducer.type';
import { quizReducer } from './reducer/quizReducer';

export const initialState:AppState ={
  quizData:quizData,
  currentQuestionIndex:0,
  score:0
}

const App : React.FC=()=>{
  const [state,dispatch]=useReducer(quizReducer,initialState);
  return (
    <div className="App">
     <Header title='Quiz app'/>
     {state.currentQuestionIndex < state.quizData.length ? (
      <Quiz quiz={state.quizData[state.currentQuestionIndex]} onOptionClick={(selectedOption)=>dispatch({type:'ATTEMPTED', selectedOption})}/>
     ):(<Score 
     currentScore={state.score}
     totalScore={state.quizData.length}
     onReset={()=>dispatch({type:'RESET'})}/>)}
    </div>
  );
}



export default App;
