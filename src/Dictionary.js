import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(){
        // Documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();

    
    }

    
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                <h1>What do you want to look up?</h1>
                <p>Ever wondered what a word means? Search here and find out! We started you out with the word {props.defaultKeyword}, as you can see below. </p>
                
                <form onSubmit={handleSubmit}>
                    <input className="searchbar" placeholder="Suggest words: sunset, compute, listen, etc." type="search" onChange={handleKeywordChange} />
                    <input className="searchbutton" type="submit" value="Search"/>
                </form>
                </section>
                <Results results={results}/>
            </div>
        ); 
    } else {
        load();
        return "Loading";
    }


    
}

export default Dictionary;