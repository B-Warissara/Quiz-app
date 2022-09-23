import { useState } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = ()=>{
    //console.log(QuestionsData);
    const [current, setCurrent] = useState(0)
    return(
        <div className = "quiz">
            <h1>{QuestionsData[current].question}</h1>
            
        </div>
    )
}

export default Quiz;