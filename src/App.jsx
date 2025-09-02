import React from 'react'
import SearchBar from './components/search-bar/searchBar'
import NavBar from './components/nav-bar/navBar';
import ResultComponent from './components/result/result';
 
function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <ResultComponent />
    </div>
  );
}
 
export default App;