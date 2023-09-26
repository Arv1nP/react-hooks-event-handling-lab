import React from "react";

export default function EyesOnMe(){
    const focus = ()=>{console.log('Good!')}
    const blur = ()=>{console.log('Hey! Eyes on me!')}
    
    return(
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}
