import './correct-display.scss';
import { targetData } from "../../test-data/target-data.js";
import mjPic from "../../assets/images/Michael-Jordan.jpg";
import belinelliPic from "../../assets/images/Marco_Belinelli_18_(cropped).jpg";



const CorrectDisplay = () =>{

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
        <div id="card-container" className="p-4">
            <div id="correct-answer-card" className="z-50 m-4">
                <div className="close-container">
                    <button>X</button>
                </div>
                <h2 id="todays-player-is">Today's player is...</h2>
                <img 
                    id="correct-answer-pic"
                    alt={targetData[0].name}
                    src={profilePic} 
                />
                <h1 id="player-name">{targetData[0].name}</h1>
                <div id="links-container">
                    <a id="share" className="links">Share Results</a>
                    <a id="checkout" className="links">Checkout {targetData[0].name}</a>
                    <a id="play" className="links">Play our other quizes here</a>
                </div>
            </div>
        </div>
    )
};

export default CorrectDisplay;