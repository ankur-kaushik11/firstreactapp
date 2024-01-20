import React,{useState} from 'react'

export default function Textform(props) {

    const handleupClick=()=>{
        console.log("UPPERCASE is clicked" + text)
        let newTxt= text.toUpperCase();
        setText(newTxt)
    }
    
    const handlelwClick=()=>{
        // console.log("lowercase is clicked"+ text)
        let newTxt=text.toLowerCase();
        setText(newTxt)
    }

    const handledlClick=()=>{
        // console.log("lowercase is clicked"+ text)
        setText(" ")
    }
    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText]= useState("Enter text here");
    return (
        <>
        <div>
            <div className="mb-3" style={{color: props.mode==="dark"?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="txt" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?'#02344d':'white',color:props.mode==="dark"?'white':'black' }}></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleupClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-4" onClick={handlelwClick}>lowercse</button>
            <button className="btn btn-primary mx-4 my-3" onClick={handledlClick}>Delete</button>
        </div>
        <div className="container" style={{color: props.mode==="dark"?'white':'black'}}>
            <h2 className='my-3'>TEXT SUMMARY</h2>
            <p>{text.split(" ").length} Words {text.length} Characters </p>
        </div>
        </>
    )
}
