import React, { useState, useEffect } from "react";
import "./result.scss";
import { targetData } from "../../test-data/target-data.js";
import { sampleData } from "../../test-data/sample-data.js";
import jokicPic from "../../assets/jokic.jpeg";






const ResultComponent = () => {
    const [draftStatus, setDraftStatus] = useState("");
    useEffect(() => {
        const draftGuessResult = (guess, target) => {
            const dGuess = parseInt(guess);
            const dTarget = parseInt(target);
            const diff = Math.abs(dGuess - dTarget);

            if (guess === target) {
                setDraftStatus("correct");
            } else if (diff <= 5) {
                setDraftStatus("close");
            } else {
                setDraftStatus("incorrect");
            }

        }

        draftGuessResult(sampleData[0].draftYear, targetData[0].draftYear);
    }, []);




    return (
        <div className="result-container">
            <div id="player-profile">
                <img id="player-pic" src={jokicPic} alt="Nikola Jokic" ></img>
                <h1 id="player-name">{sampleData[0].name}</h1>
            </div>
            <div id="result-grid" >

                
                <div id="draft" className="result-item">
                    <h1 className="cell-title">Draft</h1>
                    <h1 className="cell-data">{sampleData[0].draftYear}</h1>
                </div>
                <div id="height" className="result-item">
                    <h1 className="cell-title">Height</h1>
                    <h1 className="cell-data">{sampleData[0].height}</h1>
                </div>
                <div id="weight" className="result-item">
                    <h1 className="cell-title">Weight</h1>
                    <h1 className="cell-data">{sampleData[0].weight}</h1>
                </div>
                <div id="nationality" className="result-item">
                    <h1 className="cell-title">Nationality</h1>
                    <h1 className="cell-data">{sampleData[0].nationality}</h1>
                </div>
                <div id="all-nba" className="result-item">
                    <h1 className="cell-title">All NBA Selections</h1>
                    <h1 className="cell-data">{sampleData[0].allNbaSelections}</h1>
                </div>
                <div id="experience" className="result-item">
                    <h1 className="cell-title">Experience</h1>
                    <h1 className="cell-data">{sampleData[0].experience}</h1>
                </div>
            </div>
            <div id="colour-key">
                <p>Status: {draftStatus}</p>
            </div>
        </div>
    )

}

export default ResultComponent;