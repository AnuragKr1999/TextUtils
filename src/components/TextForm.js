import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        // console.log(event.target)
        setText(event.target.value)
    }

    const handleUpperClick = () => {
        setText(text.toUpperCase())
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase())
    }

    const handleClearClick = () => {
        setText('')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))

    }

    const hadleCopy = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    
    return (
        <>
            <div className="container mb-3 my-3">
                <label htmlFor="myBox" className="form-label"><h3> { props.heading } </h3></label>
                <textarea className="form-control" placeholder="Enter your text" onChange={handleOnChange} value={ text } id="myBox" rows="8"></textarea>
                <button className="btn btn-outline-success my-3 mx-1" onClick={handleUpperClick}>Change to UPPER CASE</button>
                <button className="btn btn-outline-info my-3 mx-1" onClick={handleLowerClick}>Change to lower case</button>
                <button className="btn btn-outline-danger my-3 mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-outline-info my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-outline-info my-3 mx-1" onClick={hadleCopy}>Copy Text</button>
                
            </div>
            <div className="container">
                <h3>Your Text Summary:</h3>
    
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>

                <h3>Preview:</h3>
                <p>{text}</p>
            </div>
        </>
    )
}