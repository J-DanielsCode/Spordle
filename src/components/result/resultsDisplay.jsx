import "./result.scss";
import { targetData } from "../../test-data/target-data.js";
import ResultRow from "./resultsRow.jsx";

const ResultComponent = ({ searchResults }) => {

    if (!searchResults || searchResults.length === 0) return null; // no results yet

    return (
        <div className="result-container z-30">
            {searchResults.map((guessResult) => (
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