import React from 'react';
import './App.css';
import Header from './components/Header';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData.content';

function App() {
  return (
    <div className="App">
     <Header title='Quiz app'/>
     <ol>
      {quizData.map((quiz,index)=>(
        <li key={index}>
          <Quiz quiz={quiz}/>
        </li>
      ))}
     </ol>
    </div>
  );
}

export default App;
