import React, { useState, useEffect } from "react";
import "./result.scss";
import { targetData } from "../../test-data/target-data.js";
import { fetchGuessContinent } from "../../helpers/nationalityRequest.js";
import { fetchTargetContinent } from "../../helpers/nationalityRequest.js";
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
import mjPic from "../../assets/images/Michael-Jordan.jpg";




const ResultRow = ({ guessResult, target }) => {
    const [nationalityStatus, setNationalityStatus] = useState(null);
    const [loadingState, setLoadingState] = useState(true);

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
            case "Michael Jordan":
                return mjPic;
            default:
                return jokicPic;
            
        }
    }

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

    const draftStatus = getDraftStatus(
        guessResult.draftYear,
        target.draftYear
    );
    const allNbaStatus = getAllNbaStatus(
        guessResult.allNbaSelections,
        target.allNbaSelections
    );
    const experienceStatus = getExperienceStatus(
        guessResult.experience,
        target.experience
    );
    const weightStatus = getWeightStatus(
        guessResult.weight,
        target.weight
    );
    const heightStatus = getHeightStatus(
        guessResult.height,
        target.height
    );

    const profileImage = imageSelector(guessResult.name);

    useEffect(() => {
        let isMounted = true; // prevent setting state if unmounted
        const checkNationality = async () => {
            if (guessResult.nationality === target.nationality) {
                if (isMounted) setNationalityStatus("correct");
            } else {
                const guessContinent = await fetchGuessContinent(guessResult.nationality);
                const targetContinent = await fetchTargetContinent(target.nationality);
                if (isMounted) setNationalityStatus(
                    guessContinent === targetContinent ? "close" : "incorrect"
                );
            }
        };
        checkNationality();
        return () => { isMounted = false };
    }, [guessResult.id]); // run only once per guess

    //if (loadingState) return null;
    if (nationalityStatus === null) return null;

    return (
        <div className="mb-6">
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
                <div 
                    id="nationality" 
                    className={`result-item ${nationalityStatus}`}
                >
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
}


const ResultComponent = ({ searchResults }) => {

    if (!searchResults || searchResults.length === 0) return null; // no results yet

    return (
        <div className="result-container z-40">
            {searchResults.map((guessResult, index) => (
                <ResultRow
                    key={guessResult.id}
                    guessResult={guessResult}
                    target={targetData[0]}
                />
            ))}
        </div>
    )

}

export default ResultComponent;