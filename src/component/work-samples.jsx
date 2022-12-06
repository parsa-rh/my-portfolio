import React, { useState } from 'react';


export default function WorkSamples (props){
  
    return(
        <div className="workSamplesContainer">

          <div className='numbersOfSamples'>{props.currentWorkSample+1}/{props.workSamples.length}</div>
          
          <div>
            {props.workSamples.map ( sample => <WorkSample 
            key={sample.id}
            name={sample.name}
            discribe={sample.discribe}
            display={sample.display}
            />)}
          </div>

          <a className="prevSampleBtn" onClick={()=> props.handleCurrentSample(-1)}>❮</a>
          <a className="nextSampleBtn" onClick={()=> props.handleCurrentSample(1)}>❯</a>

        </div>
    )
}

function WorkSample (props) {
    return(
        <div className="workSample" style={{display: props.display}}>
            <div className='workSampleAbouteSection'>
                <h1 className='workSampleName'>{props.name}</h1>
                <h4 className='workSampleDiscribe'>{props.discribe}</h4>
                <a>Visite page</a>
            </div>
            <div className='workSampleImageSection'>
                <img alt='a image of current sample' />
            </div>
        </div>
    )
}