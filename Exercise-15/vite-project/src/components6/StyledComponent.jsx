import React from 'react'

const StyledComponent = () => {
    const headingStyle={
        color: "blue",
        fontsize: "24px",
        textAlign: "center"
    }

  return (
    <>
        <style>
            {`
                #yoo {
                    color: purple;
                    font-weight: bold;
                    font-size: 20px;
                }

                h1{
                    color: blue;
                }
            `}
        </style>
    <div>
    <h1 style={headingStyle}>Hello Bhai</h1>
    <p style={{color: "green", fontFamily: "sans-serif"}}>You are Handsome</p>
    <p id="yoo">You Broooo</p>
    </div>

    </>
  )
    
}

export default StyledComponent
