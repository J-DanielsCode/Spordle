import React, { useState } from 'react'
import SearchBar from './components/search-bar/searchBar'
import NavBar from './components/nav-bar/navBar';
import ResultComponent from './components/result/result';
 
function App() {
  const [guessNum, setGuessNum] = useState(1);
  return (
    <div className="App">
      <NavBar guessNum={guessNum} setGuessNum={setGuessNum} />
      <SearchBar guessNum={guessNum} />
      {/* Only show ResultComponent when guessNum === 2 */}
      {guessNum === 2 && <ResultComponent guessNum={guessNum} />}
    </div>
  );
}
 
export default App;