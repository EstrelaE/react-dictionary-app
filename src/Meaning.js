import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 4) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
