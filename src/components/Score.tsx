import React from "react";

interface ScoreProps {
    currentScore:number,
    totalScore:number,
}

const Score: React.FC <ScoreProps>=({currentScore,totalScore})=>{
    return (
        <>
        <p>Score : {currentScore} / {totalScore}</p>
        </>
    )
}

export {Score}