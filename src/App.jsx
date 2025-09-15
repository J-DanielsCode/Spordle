import React, { useState } from 'react'
import SearchBar from './components/search-bar/searchBar'
import NavBar from './components/nav-bar/navBar';
import ResultComponent from './components/result/resultsDisplay';
import CorrectDisplay from './components/correct/correctDisplay';
 
function App() {
  const [guessNum, setGuessNum] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(true);
  
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
      <CorrectDisplay
        correctAnswer={correctAnswer}
      />
    </div>
  );
}
 
export default App;