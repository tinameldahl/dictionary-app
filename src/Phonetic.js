import React from "react";

function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} targeT="_blank">
                Listen
            </a>
            {props.phonetic.text}
        </div>
    );
}

export default Phonetic;