import React, { useState,createPortal } from 'react';
import { AppThemeContext } from '../App';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import uiHandler from './ui-handler';
import img from '../img/language-google-translate-48.png'

export default function WorkSamples (props){
    const {language, darkMode} = React.useContext(AppThemeContext)
    const [activeWorkSample, setActiveWorkSample] = useState([props.workSamples[props.currentWorkSample]])

    React.useEffect(() => {
        uiHandler(language)
        setActiveWorkSample([props.workSamples[props.currentWorkSample]])
        console.log(activeWorkSample)
    }, [language, props.currentWorkSample])


    // React.useEffect(() => {
    //     document.getElementById('workSamples-container').addEventListener('touchstart', (e) =>{
    //         console.log(e.changedTouches[0].screenX)
    //     })
    //     document.getElementById('workSamples-container').addEventListener('touchend', (e) =>{
    //         console.log(e.changedTouches[0].screenX)
    //     })
        
    // })
    return(
        <div className="workSamples-container" id='workSamples-container'>
            
            {activeWorkSample.map ( sample => <WorkSample 
                key={sample.id}
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
                />
            )}

          <a className="prevSampleBtn" id='prevSampleBtn' onClick={()=> props.handleCurrentSample(-1)}>❮</a>
          <a className="nextSampleBtn" id='nextSampleBtn' onClick={()=> props.handleCurrentSample(1)}>❯</a>

        </div>
    )
}

function WorkSample (props) {
    const {language, darkMode} = React.useContext(AppThemeContext)
    const [sampleImg, setSampleImg] = React.useState(require(`../img/${props.imgSrc}`) || null)

    React.useEffect(() => {
        uiHandler(language)
    }, [ ,language, props.currentWorkSample])
    // console.log(language,props.name)
    return(
        <div className="workSample" id='workSample'>
            <div className='workSample-about' id='workSample-about'>
                <div className='workSample-about-topic' id='workSample-about-topic'>
                    <h2>{language === 'english'? 'Sample ' : 'نمونه '}{props.currentWorkSample+1}/{props.workSamples.length}</h2>
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
                {/* <img src={props.imgSrc}/> */}
                <img src={sampleImg} />
                <Link to={props.path}>{language === 'english'? 'Visite page →' : '← دیدن صفحه'}</Link>
            </div>
        </div>
    )
}