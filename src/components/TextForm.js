import React, {useState} from 'react'

function TextForm(props) {
  
  const[text,setText]= useState('');

 
  const handleOnChange=(event)=>{
    console.log("on change");
 console.log(event);
    setText(event.target.value);
    
  }

  const handleLowClick=()=>{
    
    let newText= text.toLowerCase();
    setText(newText);
    props.showwAlert("Converted to lowercase!","success")
  }
    const handleClearClick=()=>{
    
      let newText= "";
      setText(newText);
  props.showwAlert("Text cleared!","success")
           
    }

const handleCopy=()=>{
  var text=document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showwAlert("Text copied!","success")
}

const handleExtraSpaces= ()=> {
  let newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showwAlert("Extra Spaces removed!","success")


} 

  const handleClick=()=>{
    
    let newText= text.toUpperCase();
    setText(newText);
    props.showwAlert("Converted to uppercase!","success")
    
  }
  return (
    <>
    <div className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1 >{props.heading}</h1>
        <div className="container my-3">

  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#6c5f5f':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="10"></textarea>
         </div>
 <button className={` btn btn-${props.btnClass} mx-1`} onClick={handleClick} >Convert to Uppercase</button>
 <button className={` btn btn-${props.btnClass} mx-1`} onClick={handleLowClick} >Convert to Lowercase</button>
 <button className= {` btn btn-${props.btnClass} mx-1`}onClick={handleClearClick} >Clear Text</button>
 <button className={` btn btn-${props.btnClass} mx-1`} onClick={handleCopy} >Copy Text</button>
 <button className={` btn btn-${props.btnClass} mx-1`} onClick= {handleExtraSpaces} >Remove Extra Spaces</button>
 
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your text summary</h2>
<p>  {text.split(" ").length} words and {text.length} characters </p>
<p>  {0.008* text.split(" ").length} Minutes read</p>

<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>

    </>
  )
}

export default TextForm;
