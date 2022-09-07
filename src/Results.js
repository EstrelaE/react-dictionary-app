import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h1>{props.data.word}</h1>
        {/*   {props.data.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetics data={phonetic} />
            </div>
          );
        })} */}
        {props.data.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
