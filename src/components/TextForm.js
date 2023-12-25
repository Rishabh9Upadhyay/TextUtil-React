import React, {useState} from 'react'

export default function TextForm(p) {
  const [text, setText] = useState("");
//   text = "dsgffugds" wrong way to change th4e state
// using settext(new text) is currect way to change
  
  const handleUpClick = ()=>{
    // console.log("Rishabh")
    let newtext = text.toUpperCase();
    setText(newtext)
    p.showAlert("Converted to upper case","success")
  }
  const handleLwClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    p.showAlert("Converted to lower case","success")
  }
  const SpeekContents = ()=>{
    let newtext = new SpeechSynthesisUtterance();
    newtext.text = text;
    window.speechSynthesis.speak(newtext)
    p.showAlert("Started","success")
  }
  const clearText = ()=>{
    setText("")
    p.showAlert("Text havebeen cleared","success")
  }
  const SpaceRemove = ()=>{
    const newtext = text.replace(/\s/g, "");
    setText(newtext);
    p.showAlert("Space Removed","success")
  }
  const handleCopy = ()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    p.showAlert("Copied in clipboard","success")
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);  //a event handling always gives an event object
  }
  return (
    <>
    <div className='container' style={{color: p.mode==='dark'?'white':'#042743'}}>
       <h2 className='my-1'><b>{p.heading}</b>-</h2>
      <div className="mb-3 my-1">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: p.mode==='dark'?'#d3d8dd':'white',color: p.mode==='dark'?'#070207':'#042743'}} id="mybox" rows="8" placeholder='Enter text here'></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleLwClick}>LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={SpeekContents}>Listen Contents</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Contents</button>
      <button className="btn btn-primary my-2 mx-2" onClick={SpaceRemove}>Space Remove</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3" style={{color: p.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <li>Number of letters {text.length}</li>
        <li>Number of words {text.split(" ").length-1}</li>
        <li>{0.008*(text.split(" ").length-1)} minuts to read</li>
        <li><b>Preview: </b></li>
        <p>{text.length>0?text:"Enter some thing to preview it here"}</p>
    </div>
    </>
  )
}