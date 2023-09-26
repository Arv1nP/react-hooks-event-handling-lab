import React from "react";


function Keypad (){
    const event = ()=>{console.log('Entering password...')}
    return (
        <input
          type="password"
          id="password"
          name="password"
          onChange={event}>
        </input>
    )
}

export default Keypad;