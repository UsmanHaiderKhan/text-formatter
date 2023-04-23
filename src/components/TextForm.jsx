import { useState } from "react";


export const TextForm  = (props) => {
    const [text, setText] = useState('');
     
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
   const handleClearClick = () =>{
        setText('');
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    return(
        <>
    <div className="mb-3">
        <text htmlFor="exampleInputEmail1" className="form-label">{props.mainHeading}</text>
        <textarea value={text} onChange={handleOnChange} className="form-control" rows="6" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <button onClick={handleUpperCaseClick} className="mx-2 btn btn-primary mt-3">Convert to UpperCase</button>
        <button onClick={handleLowerCaseClick} className="mx-2 btn btn-success mt-3">Convert to LowerCase</button>
        <button onClick={handleClearClick} className="mx-2 btn btn-danger mt-3">Clear</button>
    </div>

    <div>
        <h3>Total count for words</h3>
        <p>Total Words Count: <b>{text.split(" ").length}</b> and Total Character Count: <b>{text.length}</b></p>
    </div>
    <div>
        <h3>Total Time to read the Text</h3>
        <p><b>{0.008 * text.split(" ").length }&nbsp;</b> Time Need to read complete paragraph</p>
    </div>
        </>
    );
}