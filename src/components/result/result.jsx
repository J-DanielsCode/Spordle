import React, { useState, useEffect } from "react";
import "./result.scss";
import { targetData } from "../../test-data/target-data.js";
import { sampleData } from "../../test-data/sample-data.js";
import jokicPic from "../../assets/jokic.jpeg";






const ResultComponent = ({ guessNum, searchResults }) => {
    if (!searchResults || searchResults.length === 0) return null; // no results yet

    // const guessResult = () => {
    //     const resultIndex = sampleData.findIndex(obj => obj.name.toLowerCase() === searchResults[0].toLowerCase());
    //     return sampleData[resultIndex];
    // }
    const result = searchResults[0]; // guessResult();

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

        // const searchGuess = sampleData.filter((item) => 
        //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
        // );

        // draftGuessResult(searchGuess.draftYear, targetData[0].draftYear);
        
    }, []);

    




    return (
        
        <div className="result-container z-40">
            <div id="player-profile">
                <img id="player-pic" src={jokicPic} alt="Nikola Jokic" ></img>
                <h1 id="player-name">{result.name}</h1>
            </div>
            <div id="result-grid" >

                
                <div id="draft" className="result-item">
                    <h1 className="cell-title">Draft</h1>
                    <h1 className="cell-data">{result.draftYear}</h1>
                </div>
                <div id="height" className="result-item">
                    <h1 className="cell-title">Height</h1>
                    <h1 className="cell-data">{result.height}</h1>
                </div>
                <div id="weight" className="result-item">
                    <h1 className="cell-title">Weight</h1>
                    <h1 className="cell-data">{result.weight}</h1>
                </div>
                <div id="nationality" className="result-item">
                    <h1 className="cell-title">Nationality</h1>
                    <h1 className="cell-data">{result.nationality}</h1>
                </div>
                <div id="all-nba" className="result-item">
                    <h1 className="cell-title">All NBA</h1>
                    <h1 className="cell-data">{result.allNbaSelections}</h1>
                </div>
                <div id="experience" className="result-item">
                    <h1 className="cell-title">Experience</h1>
                    <h1 className="cell-data">{result.experience}</h1>
                </div>
            </div>
            <div id="colour-key">
                <p id="no-match" className="example">No Match</p>
                <p id="close" className="example">Close</p>
                <p id="match" className="example">Match</p>
            </div>
        </div>
    )

}

export default ResultComponent;