import React from "react";

interface QuizProps {
  quiz:{
    question:string,
    options:string[],
    correctOption:number,
  };
  onOptionClick:(selectedOption:number)=>void;
}


const Quiz: React.FC<QuizProps> =({quiz,onOptionClick})=>{

    return (
        <div>
        <p>{quiz.question}</p>
        <ul>
            {quiz.options.map((option,index)=>(
                <label key={index}>
                    <input type="radio" value={option} name="quiz-option" onChange={()=>onOptionClick(index)}/>
                    {option}
                </label>
            ))}
        </ul>
        </div>
    )
}

export {Quiz};