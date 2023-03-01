import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target)
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPER CASE", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const hadleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");
  };

  // this variable will be true if there are no words in text
  let checkForWord = text.split(" ").filter((element) => {return element.length !== 0}).length === 0

  return (
    <div>
      <div
        className="container mb-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label htmlFor="myBox" className="form-label">
          <h3> {props.heading} </h3>
        </label>
        <textarea
          className="form-control"
          placeholder="Enter your text"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          disabled={checkForWord}
          className="btn btn-success my-3 mx-1"
          onClick={handleUpperClick}
        >
          Change to UPPER CASE
        </button>
        <button disabled={checkForWord} className="btn btn-info my-1 mx-1" onClick={handleLowerClick}>
          Change to lower case
        </button>
        <button disabled={checkForWord} className="btn btn-danger my-1 mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={checkForWord} className="btn btn-info my-1 mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={checkForWord} className="btn btn-info my-1 mx-1" onClick={hadleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#02091f" }}
      >
        <h3>Your Text Summary:</h3>

        <p>
          {text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to read</p>

        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
