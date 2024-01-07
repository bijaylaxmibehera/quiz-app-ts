import { QuizAction,AppState } from "./quizReducer.type";
import { checkAnswer ,getNextQuestion} from "../utils/commonFunction";
import { initialState } from "../App";

export const quizReducer = (state:AppState,action:QuizAction):AppState=>{
    switch (action.type){
        case 'ATTEMPTED':
            const nextQuestionIndex=getNextQuestion(state.currentQuestionIndex,state.quizData.length);
            const updatedScore= checkAnswer(action.selectedOption, state.quizData[state.currentQuestionIndex].correctOption)? state.score+1 : state.score;

            return {
                ...state,
                currentQuestionIndex:nextQuestionIndex,
                score:updatedScore
            }

        case 'RESET':
            return initialState;
        default: 
        return state;

    }
}
