import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 1) {
          return (
            <div key={index}>
              <h5>meaning:</h5>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        } else if (index < 4) {
          return (
            <div key={index}>
              <h6>also:</h6>
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
