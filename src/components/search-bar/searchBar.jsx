import React, { useEffect, useState, useCallback } from 'react'
import { Search, Mic } from 'lucide-react'
import { sampleData } from "../../test-data/sample-data.js"

 
const SearchBar = ({ guessNum, setGuessNum }) => {
    // Todo for you: Add the below code to the GoogleSearchBar component:
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const [guessNum, setGuessNum] = useState(1);
    
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        }
    }

    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() === '') {
                setSearchResults([]);
            } else {
                const results = sampleData.filter((item) =>
                    item.name.toLowerCase().includes(term.toLowerCase())
                );
                setSearchResults(results);
            }
            setGuessNum((prev) => prev + 1);
            console.log(guessNum);
        }, 300),
        [],
    )

    
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="h-32 flex flex-col items-center bg-gray-950 p-4">
            <h1 className="text-white w-full px-5 mb-1 max-w-lg" >Guess {guessNum} of 10</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="mb-8 w-full max-w-lg"
            >
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="text-white placeholder-white w-full rounded-full border border-gray-200 bg-gray-950 px-5 py-3 pr-20 text-base shadow-md transition-shadow duration-200 hover:shadow-lg focus:border-gray-300 focus:outline-none"
                        placeholder="Enter player name"
                    />
                    <div className="absolute right-0 top-0 mr-4 mt-3 flex items-center">
                        <button
                            type="button"
                            className="mr-3 text-white hover:text-gray-400"
                            onClick={() =>
                                alert(
                                    'Voice search is unsupported in this demo.\nTry implementing this feature yourself 🙂',
                                )
                            }
                        >
                            <Mic size={20} />{' '}
                        </button>{' '}
                        <button type="submit" className="text-gray-400 hover:text-white">
                            <Search size={20} />{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </form>{' '}
            {searchResults.length > 0 && (
                <div className="w-full max-w-lg rounded-lg bg-white p-2 shadow-md">
                    {/* <h2 className="mb-4 text-xl font-bold"> Search Results: </h2>{' '} */}
                    <ul>
                        {' '}
                        {searchResults.map((result) => (
                            <li key={result.height} className="mb-2">
                                <a
                                    href={result.url}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    {result.name}{' '}
                                </a>{' '}
                            </li>
                        ))}{' '}
                    </ul>{' '}
                </div>
            )}{' '}
        </div>
    )
}

 
export default SearchBar;