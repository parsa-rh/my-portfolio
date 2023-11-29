import React, { useState,createPortal } from 'react';
import { AppThemeContext } from '../App';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import uiHandler from './ui-handler';

export default function WorkSamples (props){
    const {language, darkMode} = React.useContext(AppThemeContext)
    React.useEffect(() => {
        uiHandler(language)
    }, [language, props.currentWorkSample])
    return(
        <div className="workSamples-container" id='workSamples-container'>
            
            {props.workSamples.map ( sample => <WorkSample 
            key={`${sample.id}-${language}`} // Update the key prop
            name={sample.name}
            namePersian={sample.namePersian}
            path={sample.path}
            image={sample.image}
            description={sample.description}
            descriptionPersian={sample.descriptionPersian}
            features={sample.features}
            featuresPersian={sample.featuresPersian}
            imgSrc={sample.imgSrc}
            visibility={sample.visibility}
            uiHandler={uiHandler()}
            workSamples={props.workSamples}
            currentWorkSample={props.currentWorkSample}
            />)}

          <a className="prevSampleBtn" id='prevSampleBtn' onClick={()=> props.handleCurrentSample(-1)}>❮</a>
          <a className="nextSampleBtn" id='nextSampleBtn' onClick={()=> props.handleCurrentSample(1)}>❯</a>

        </div>
    )
}
function WorkSample (props) {
    const {language, darkMode} = React.useContext(AppThemeContext)
    React.useEffect(() => {
        uiHandler(language)
    }, [ ,language, props.currentWorkSample])
    // console.log(language,props.name)
    return(
        <div className="workSample" id='workSample' style={{visibility: props.visibility}}>
            <div className='workSample-about' id='workSample-about'>
                <div className='workSample-about-topic' id='workSample-about-topic'>
                    <h2>Samples  {props.currentWorkSample+1}/{props.workSamples.length}</h2>
                    <h1>{language === 'english'? props.name : props.namePersian}</h1>
                </div>
                <p>{language === 'english'? props.description: props.descriptionPersian}</p> 
                <ul>
                    {language==='english'? 
                    props.features.map((feature, index) => <li key={index}>{feature}</li>) :
                    props.featuresPersian.map((feature, index) => <li key={index}>{feature}</li>)
                }
                </ul>
            </div>
            <div className='workSample-image' id='workSample-image'>
                <img src={props.imgSrc}/>
                <Link to={props.path}>{language === 'english'? 'Visite page' : 'دیدن صفحه'}</Link>
            </div>
        </div>
    )
}