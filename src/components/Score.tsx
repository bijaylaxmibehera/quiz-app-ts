import React from "react";

interface ScoreProps {
    currentScore:number,
    totalScore:number,
    onReset:()=>void
}

const Score: React.FC <ScoreProps>=({currentScore,totalScore,onReset})=>{
    return (
        <>
        <p>Score : {currentScore} / {totalScore}</p>
        <button onClick={onReset}>Reset</button>
        </>
    )
}

export {Score}