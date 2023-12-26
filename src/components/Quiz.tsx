import React from "react";

interface QuizProps {
  quiz:{
    question:string,
    options:string[],
  }
}


const Quiz: React.FC<QuizProps> =({quiz})=>{
    return (
        <div>
        <p>{quiz.question}</p>
        <ul>
            {quiz.options.map((option,index)=>(
                <li key={index}>
                    <input type="radio"/>
                    {option}
                </li>
            ))}
        </ul>
        </div>
    )
}

export {Quiz};