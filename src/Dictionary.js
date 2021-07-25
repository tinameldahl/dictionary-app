import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        // Documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <h1>Dictionary 1.0</h1>
            <p>Ever wondered what a word means? Search here and find out!</p>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                <input type="submit" value="Search"/>
            </form>
            
            <Results results={results}/>
        </div>
    ) 
}

export default Dictionary;