
import React ,{useState,useRef} from 'react'
import './ChnageColor.css'

function ChangeColor() {
    let paraRef = useRef();

    function generateColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let st = "rgb(" + r + "," + g + "," + b + ")";
        return st;
    }

    function changeColor() {
        paraRef.current.style.backgroundColor = generateColor();
    }
    return (
        <div className='container'>
            <p ref={paraRef} id="para"></p>
            <br></br>
            <button onClick={changeColor}>Change Color</button>

        </div>
    );
}

export default ChangeColor
