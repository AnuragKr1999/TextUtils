import React, { useState } from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'grey':'white',
    }

  return (
    <div className="container my-3" style={myStyle}>
      <div className="accordion" id="accordionExample" style={myStyle}>
      <strong>About Us</strong>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Utils is a free character counter tool that provides instant character count & word count statistics for a
              given text. TextUtils reports the number of words and characters. Thus is suitable for writing text with
              qord/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such a Chrome, FireFox, Internet Explorer, Safari, Opera.
              It suits to count character in facebook, blog, books, excel document, pdf, essays, etc.
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
