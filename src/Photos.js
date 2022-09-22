import React from "react";

export default function Photos(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <section className="Photos">
        {props.data.map((photo, index) => {
          return (
            <div key={index}>
              <a
                href={photo.src.landscape}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={photo.src.landscape} alt={photo.alt} />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
