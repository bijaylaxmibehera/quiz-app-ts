import React from 'react';
import './App.css';
import Header from './components/Header';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData.content';
import { Score } from './components/Score';

function App() {
  return (
    <div className="App">
     <Header title='Quiz app'/>
     <ol>
      {quizData.map((quiz,index)=>(
        <li key={index}>
          <Quiz quiz={quiz} onOptionClick={(selectedOption)=>index}/>
        </li>
      ))}
     </ol>
     <Score currentScore={0} totalScore={quizData.length}/>
    </div>
  );
}

export default App;
