import React from "react";

function Meaning(props){
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>  
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p><em>{definition.example}</em></p>
                    </div>
                )



            })}
            
        </div>
    );
}


export default Meaning;