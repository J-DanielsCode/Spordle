import React, { useState } from 'react'
import SearchBar from './components/search-bar/searchBar'
import NavBar from './components/nav-bar/navBar';
import ResultComponent from './components/result/result';
 
function App() {
  const [guessNum, setGuessNum] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <div className="App">
      <NavBar guessNum={guessNum} setGuessNum={setGuessNum} />
      <SearchBar 
        guessNum={guessNum} 
        setGuessNum={setGuessNum}
        setSearchResults={setSearchResults}
      />
      {/* Only show ResultComponent when guessNum === 2 */}
      {guessNum > 1 && 
        <ResultComponent 
          guessNum={guessNum}
          searchResults={searchResults}
        />
      }
    </div>
  );
}
 
export default App;