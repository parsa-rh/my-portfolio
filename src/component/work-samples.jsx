import React, { useState,createPortal } from 'react';
import { AppThemeContext } from '../App';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';

export default function WorkSamples (props){
    const {language, darkMode} = React.useContext(AppThemeContext)
    return(
        <div className="workSamples-container" id='workSamples-container'>
          <h4>{props.currentWorkSample+1}/{props.workSamples.length}</h4>
          <div>
            {props.workSamples.map ( sample => <WorkSample 
            key={sample.id}
            name={sample.name}
            namePersian={sample.namePersian}
            path={sample.path}
            image={sample.image}
            description={sample.description}
            descriptionPersian={sample.descriptionPersian}
            display={sample.display}
            />)}
          </div>

          <a className="prevSampleBtn" id='prevSampleBtn' onClick={()=> props.handleCurrentSample(-1)}>❮</a>
          <a className="nextSampleBtn" id='nextSampleBtn' onClick={()=> props.handleCurrentSample(1)}>❯</a>

        </div>
    )
}
function WorkSample (props) {
    const {language, darkMode} = React.useContext(AppThemeContext)

    return(
        <div className="workSample" id='workSample' style={{display: props.display}}>
            <div className='workSample-about' id='workSample-about'>
                <h1>{language === 'english'? props.name : props.namePersian}</h1>
                <h4>{language === 'english'? props.description: props.descriptionPersian}</h4> 
                <a ><Link to={props.path}>{language === 'english'? 'Visite page' : 'دیدن صفحه'}</Link></a>
            </div>
            <div className='workSample-image' id='workSample-image'>
            </div>
        </div>
    )
}