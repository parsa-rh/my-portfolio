import React, { useState } from 'react';


export default function WorkSamples (props){
  
    return(
        <div className="workSamplesContainer">

          <div>
            {props.workSamples.map ( sample => <WorkSample 
            key={sample.id}
            name={sample.name}
            discribe={sample.discribe}
            display={sample.display}
            />)}
          </div>

          <a className="prevSampleBtn" onClick={()=> props.handelCurrentSample(-1)}>❮</a>
          <a className="nextSampleBtn" onClick={()=> props.handelCurrentSample(1)}>❯</a>

          <div>
            <span className="dot" ></span> 
            <span className="dot" ></span> 
            <span className="dot" ></span> 
          </div>

        </div>
    )
}

function WorkSample (props) {
    return(
        <div className="workSample" style={{display: props.display}}>
            <h4>{props.discribe}</h4>
        </div>
    )
}