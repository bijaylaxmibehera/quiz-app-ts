export const checkAnswer=(selectedOption:number, correctOption:number):boolean=>{
    return selectedOption===correctOption;
}

export const getNextQuestion=(currentIndex:number,totalQuestions:number):number=>{
  return currentIndex+1 <= totalQuestions ? currentIndex + 1 : currentIndex
}