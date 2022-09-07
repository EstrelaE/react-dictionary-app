import React from "react";

export default function Phonetics(props) {
  console.log(props.data);
  return (
    <div className="Phonetics">
    
      {props.data.text}
    </div>
  );
}
