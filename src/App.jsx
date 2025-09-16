import React, { useState, useEffect } from 'react'
import SearchBar from './components/search-bar/searchBar'
import NavBar from './components/nav-bar/navBar';
import ResultComponent from './components/result/resultsDisplay';
import CorrectDisplay from './components/correct/correctDisplay';
import { targetData } from "./test-data/target-data.js";

 
function App() {
  const [guessNum, setGuessNum] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [correctAnsDisplay, setCorrectAnsDisplay] = useState(false);

  // Game logic: check correctness whenever searchResults changes
  useEffect(() => {
    const target = targetData[0];
    const correct = searchResults.some(r => r.id === target.id);
    const timer = setTimeout(() => {
      setCorrectAnswer(correct);
      if (correct) {
        setCorrectAnsDisplay(true);
      }
    }, 1500); //ms

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, [searchResults]);


  
  return (
    <div className="App">
      <NavBar guessNum={guessNum} setGuessNum={setGuessNum} />
      <SearchBar 
        guessNum={guessNum} 
        setGuessNum={setGuessNum}
        setSearchResults={setSearchResults}
        correctAnswer={correctAnswer}
      />
      {/* Only show ResultComponent when guessNum === 2 */}
      {guessNum > 1 && 
        <ResultComponent 
          searchResults={searchResults}
          setCorrectAnswer={setCorrectAnswer}
          correctAnswer={correctAnswer}
        />
      }
      {/* Show modal only when correct */}
      {correctAnsDisplay && 
        <CorrectDisplay 
          setCorrectAnsDisplay={setCorrectAnsDisplay}
          correctAnsDisplay={correctAnsDisplay}
        />
      }
    </div>
  );
}
 
export default App;