import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData.content';
import { Score } from './components/Score';
import { checkAnswer } from './utils/commonFunction';

const App : React.FC=()=>{
  const [currentQuestionIndex, setCurrentQuestionIndex]=useState<number>(0);
  const [score,setScore]=useState<number>(0);

  const handleOptionClick=(selectedOption:number)=>{
    const currentQuiz=quizData[currentQuestionIndex];
    if(checkAnswer(selectedOption,currentQuiz.correctOption)){
      setScore(score+1);
    }
    setCurrentQuestionIndex(currentQuestionIndex+1)
  }


  return (
    <div className="App">
     <Header title='Quiz app'/>
     {currentQuestionIndex < quizData.length ? (
        <Quiz quiz={quizData[currentQuestionIndex]} onOptionClick={handleOptionClick}/>
     ):( <Score currentScore={score} totalScore={quizData.length}/>)}
    </div>
  );
}



export default App;
