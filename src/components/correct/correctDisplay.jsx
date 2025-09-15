import './correct-display.scss';
import { targetData } from "../../test-data/target-data.js";


const CorrectDisplay = ({ correctAnswer }) =>{
    return (
        <>
            {correctAnswer && (
                <div id="correct-answer-card" className="z-50">
                    <button>X</button>
                    <h2>Today's player is...</h2>
                    <img alt="" />
                    <h1>{targetData[0].name}</h1>

                </div>
            )}
        </>
    )
};

export default CorrectDisplay;