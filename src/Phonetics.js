import React from "react";

export default function Phonetics(props) {
  console.log(props.data);
  return (
    <div className="Phonetics">
      <a href={props.data.audio}>Listen</a>
      <br />
      {props.data.text}
    </div>
  );
}
