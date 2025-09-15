import './correct-display.scss';
import { targetData } from "../../test-data/target-data.js";
import mjPic from "../../assets/images/Michael-Jordan.jpg";
import belinelliPic from "../../assets/images/Marco_Belinelli_18_(cropped).jpg";



const CorrectDisplay = ({ correctAnswer }) =>{

    const imageSelector = (name) => {
        switch (name) {
            case "Marco Belinelli":
                return belinelliPic;
            case "Michael Jordan":
                return mjPic;
            default:
                return mjPic;
            
        }
    }  

    const profilePic = imageSelector(targetData[0].name);

    return (
        <>
            {correctAnswer && (
                <div id="correct-answer-card" className="z-50">
                    <button>X</button>
                    <h2 id="todays-player-is">Today's player is...</h2>
                    <img 
                        id="correct-answer-pic"
                        alt={targetData[0].name}
                        src={profilePic} 
                    />
                    <h1>{targetData[0].name}</h1>

                </div>
            )}
        </>
    )
};

export default CorrectDisplay;