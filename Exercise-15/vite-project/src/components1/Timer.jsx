import React,{useState,useRef,useEffect} from 'react'

const Timer = () => {
    const[sec,setSec]=useState(0)
    let timer=useRef(null)

    useEffect(() => {
        startTimer();  // Call the function
        return () => stopTimer();  // Cleanup on unmount
    }, []);

    

    function startTimer(){
        timer.current=setInterval(
            ()=>{
                setSec(sec=>sec+1)
            },1000)
    }

    function stopTimer(){
        clearInterval(timer.current)
        timer.current=null;
    }

    function resetTimer(e){
        stopTimer(e);
        setSec(0);
    }
  return (
    <div>
        <h1>{sec}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      
    </div>
  )
}

export default Timer


// import React, { useState, useRef } from 'react';

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
//     let timer = useRef(null);

//     function startTimer() {
//         if (!timer.current) {
//             timer.current = setInterval(() => {
//                 setSeconds((prev) => prev + 1);
//             }, 1000);
//         }
//     }

//     function stopTimer() {
//         clearInterval(timer.current);
//         timer.current = null;
//     }

//     function resetTimer() {
//         stopTimer();
//         setSeconds(0);
//     }

//     function formatTime(totalSeconds) {
//         const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
//         const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
//         const secs = String(totalSeconds % 60).padStart(2, '0');
//         return `${hrs}:${mins}:${secs}`;
//     }

//     return (
//         <div>
//             <h1>{formatTime(seconds)}</h1>
//             <button onClick={startTimer}>Start</button>
//             <button onClick={stopTimer}>Stop</button>
//             <button onClick={resetTimer}>Reset</button>
//         </div>
//     );
// }

// export default Timer;

