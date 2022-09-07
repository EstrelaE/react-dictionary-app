import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h2>{props.data.word}</h2>
          {props.data.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetics data={phonetic} />
              </div>
            );
          })}
        </section>
        {props.data.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
                <Synonyms synonyms={meaning.synonyms} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
