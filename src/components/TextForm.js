import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success")
      }
      
      const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success")
      }
      
      const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text" , "success")
    }
    const handleReverseClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);

        let newText = text.split('').reverse().join('');        
        setText(newText)
        props.showAlert("Text is Reversed" , "success")
        
      }
      
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text is spoken" , "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState("")
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
      <>
        <div style={{color: props.mode==='dark'?'white':'#070e57'}}> 
                <h1>{props.heading} </h1>
                <div className="mb-3" style={{color: props.mode==='dark'?'white':'#070e57'}}> 
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#070e57'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Click to Reverse Text</button>
                <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#070e57'}}>
          <h1>Your Summary here</h1>
          <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
          <p>Approx. time required to read is : {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008}</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </>
  )
}
