import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`searching for "${keyword}" definition`);
    }

    function handleKeywordChange(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
    }



    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    ) 
}

export default Dictionary;