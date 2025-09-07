import React, { useState, useEffect } from "react";
import "./result.scss";
import { targetData } from "../../test-data/target-data.js";
import { sampleData } from "../../test-data/sample-data.js";
import jokicPic from "../../assets/images/jokic.jpeg";
import rosePic from "../../assets/images/Derrick_Rose_2.jpg";
import lebronPic from "../../assets/images/lebron-james.jpg";
import webberPic from "../../assets/images/chris-webber.jpg";
import gervinPic from "../../assets/images/george-gervin.jpg";
import ginobiliPic from "../../assets/images/Manu_Ginóbili_(cropped_2).jpg";
import mGasolPic from "../../assets/images/Marc_Gasol_Grizzlies.jpg";
import belinelliPic from "../../assets/images/Marco_Belinelli_18_(cropped).jpg";
import wembyPic from "../../assets/images/victor-wembanyama.jpg";
import gilbertPic from "../../assets/images/Gilbert_arenas_2008.jpg";
import barkleyPic from "../../assets/images/charles-barkley.jpg";







const ResultComponent = ({ guessNum, searchResults }) => {
    if (!searchResults || searchResults.length === 0) return null; // no results yet

    const imageSelector = (name) => {
        switch (name) {
            case "Nikola Jokic":
                return jokicPic;
            case "Derrick Rose":
                return rosePic;
            case "Gilbert Arenas":
                return gilbertPic;
            case "George Gervin":
                return gervinPic;
            case "Manu Ginobili":
                return ginobiliPic;
            case "Chris Webber":
                return webberPic;
            case "LeBron James":
                return lebronPic;
            case "Marc Gasol":
                return mGasolPic;
            case "Victor Wembanyama":
                return wembyPic;
            case "Marco Belinelli":
                return belinelliPic;
            case "Charles Barkley":
                return barkleyPic;
            default:
                return jokicPic;
            
        }
    }

    // const guessResult = () => {
    //     const resultIndex = sampleData.findIndex(obj => obj.name.toLowerCase() === searchResults[0].toLowerCase());
    //     return sampleData[resultIndex];
    // }
    // const result = searchResults[0]; // guessResult();

    const getDraftStatus = (guessYear, targetYear) => {
        const dGuess = parseInt(guessYear);
        const dTarget = parseInt(targetYear);
        const diff = Math.abs(dGuess - dTarget);

        if (diff === 0) return "correct";
        if (diff <= 5) return "close";
        return "incorrect";
    };

    const getAllNbaStatus = (guessNba, targetNba) => {
        const dGuess = parseInt(guessNba);
        const dTarget = parseInt(targetNba);
        const diff = Math.abs(dGuess - dTarget);

        if (diff === 0) return "correct";
        if (diff <= 3) return "close";
        return "incorrect"; 
    };

    const getExperienceStatus = (guessExperience, targetExperience) => {
        const dGuess = parseInt(guessExperience);
        const dTarget = parseInt(targetExperience);
        const diff = Math.abs(dGuess - dTarget);

        if (diff === 0) return "correct";
        if (diff <= 3) return "close";
        return "incorrect"; 
    };

    const getHeightStatus = (guessHeight, targetHeight) => {
        const dGuess = parseFloat(guessHeight);
        const dTarget = parseFloat(targetHeight);
        const diff = Math.abs(dGuess - dTarget);

        if (diff === 0) return "correct";
        if (diff <= 0.1) return "close";
        return "incorrect";  
    };

    const getWeightStatus = (guessWeight, targetWeight) => {
        const dGuess = parseFloat(guessWeight);
        const dTarget = parseFloat(targetWeight);
        const diff = Math.abs(dGuess - dTarget);

        if (diff === 0) return "correct";
        if (diff <= 5) return "close";
        return "incorrect";  
    };

    




    return (
        
        <div className="result-container z-40">
            {searchResults.map((guessResult, index) => {
                const draftStatus = getDraftStatus(
                    guessResult.draftYear,
                    targetData[0].draftYear
                );
                const allNbaStatus = getAllNbaStatus(
                    guessResult.allNbaSelections,
                    targetData[0].allNbaSelections
                );
                const experienceStatus = getAllNbaStatus(
                    guessResult.experience,
                    targetData[0].experience
                );
                const weightStatus = getWeightStatus(
                    guessResult.weight,
                    targetData[0].weight
                );
                const heightStatus = getHeightStatus(
                    guessResult.height,
                    targetData[0].height
                );
                const profileImage = imageSelector(guessResult.name);


                return (
                    <div key={index} className="mb-6">
                        <div id="player-profile">
                            <img 
                                id="player-pic" 
                                src={profileImage} 
                                alt={guessResult.name} 
                            />
                            <h1 id="player-name">{guessResult.name}</h1>
                        </div>
                        <div id="result-grid" >

                            
                            <div 
                                id="draft" 
                                className={`result-item ${draftStatus}`}
                            >
                                <h1 className="cell-title">Draft</h1>
                                <h1 className="cell-data">{guessResult.draftYear}</h1>
                            </div>
                            <div 
                                id="height" 
                                className={`result-item ${heightStatus}`}
                            >
                                <h1 className="cell-title">Height</h1>
                                <h1 className="cell-data">{guessResult.height}</h1>
                            </div>
                            <div 
                                id="weight" 
                                className={`result-item ${weightStatus}`}
                            >
                                <h1 className="cell-title">Weight</h1>
                                <h1 className="cell-data">{guessResult.weight}</h1>
                            </div>
                            <div id="nationality" className="result-item">
                                <h1 className="cell-title">Nationality</h1>
                                <h1 className="cell-data">{guessResult.nationality}</h1>
                            </div>
                            <div 
                                id="all-nba" 
                                className={`result-item ${allNbaStatus}`}
                            >
                                <h1 className="cell-title">All NBA</h1>
                                <h1 className="cell-data">{guessResult.allNbaSelections}</h1>
                            </div>
                            <div 
                                id="experience" 
                                className={`result-item ${experienceStatus}`}
                            >
                                <h1 className="cell-title">Experience</h1>
                                <h1 className="cell-data">{guessResult.experience}</h1>
                            </div>
                        </div>
                        <div id="colour-key">
                            <p id="no-match" className="example">No Match</p>
                            <p id="close" className="example">Close</p>
                            <p id="match" className="example">Match</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default ResultComponent;