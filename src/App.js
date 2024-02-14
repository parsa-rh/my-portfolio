import React, { useEffect, useContext, createContext, Component} from 'react';
import { BrowserRouter, Routes, Route, json } from "react-router-dom"
import './component/portfolio.css'
// import './component/work-samples.css'
import NavBar from './component/navbar';
import Intrduce from './component/intrduce';
import WorkSamples from './component/work-samples.jsx'
import About from './component/about';
import workSamplesObj from './samples-obj.json'
import lanPng from './img/language-google-translate-48.png'
// import uiHandler from './component/ui-handler.js';

// this const is a useContext hook , it pass the states and props to smallest component in App and it is passive
export const AppThemeContext = React.createContext()

export default function App() {
  const [language, setLanguge]= React.useState(localStorage.getItem('rh-portfolio-language')||'english')
  const [workSamples, setWorkSamples]= React.useState(workSamplesObj.workSamplesObj)
  const [currentWorkSample, setCurrentWorkSample]= React.useState(JSON.parse(localStorage.getItem('rh-portfolio-current-sample'))||0)


  // this function increments and decrements the current sample value and it is active
  function handleCurrentSample (n){
    setCurrentWorkSample((prevCurrent)=>{
      if( prevCurrent+n >= 0 && prevCurrent + n <= workSamples.length-1 ) {
        const newCS = prevCurrent+n;
        localStorage.setItem('rh-portfolio-current-sample', JSON.stringify(newCS));
        console.log(newCS, JSON.parse(localStorage.getItem('rh-portfolio-current-sample')))
        return (prevCurrent + n)
      }else{
        const newCS = prevCurrent;
        localStorage.setItem('rh-portfolio-current-sample',JSON.stringify(newCS))
        return (prevCurrent)}
    })
  }
  
  // this functions handel language toggle
  function handeleToggleLanguage (){
    setLanguge(language === 'english'? 'persian' : 'english')
    localStorage.setItem('rh-portfolio-language', language === 'english'? 'persian' : 'english')
  }
  function handeleLanguage (lan){
    setLanguge(lan)
    localStorage.setItem('rh-portfolio-language', lan)
  }

  return(
    <AppThemeContext.Provider value={{language}}>
        <main className='po-main' id='po-main' >
        {<link rel="stylesheet" href='./component/portfolio.css' />}
          <div className='po-background-blur-container'>
            <div className='blur-square-1'></div>
            <div className='blur-square-2'></div>
            <div className='blur-square-3'></div>
            <div className='blur-square-4'></div>
            <div className='blur-square-5'></div>
            <div className='blur-square-6'></div>
            <div className='blur-square-7'></div>
            <div className='blur-square-8'></div>
          </div>
          <header className='header'>
            <NavBar 
            handeleLanguage={handeleLanguage}
            setLanguge={setLanguge}
            />
          </header>
          <section id='intrduceSection' >
            <Intrduce/>
          </section>
          <section id='workSamplesSection' >
            <WorkSamples
              workSamples={workSamples}
              currentWorkSample={currentWorkSample}
              handleCurrentSample={handleCurrentSample}
            />
          </section>
          <section id='aboutSection'>
            <About/>
            <div className='po-lang-setting'>
              {/* <button onClick={handeleToggleLanguage}>Lan</button> */}
              <div className='po-lang-container'>
                    <span>Language</span>
                    <img src={lanPng} alt='language' />
                    <button onClick={()=>handeleLanguage('english')} style={language === 'english'? {color:'#fff'}:{color:'#707070'}}>English</button>
                    <button onClick={()=>handeleLanguage('persian')} style={language === 'english'? {color:'#707070'}:{color:'#fff'}}>Persian</button>
                </div>
            </div>
          </section>
        </main>
    </AppThemeContext.Provider>
  )
}