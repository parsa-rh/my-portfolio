import React, { useEffect, useContext, createContext} from 'react';
import style from './component/style.css'
import NavBar from './component/navbar';
import Intrduce from './component/intrduce';
import WorkSamples from './component/work-samples.jsx'
import About from './component/about';
import workSamplesObj from './samples-obj.json'
import uiHandler from './component/ui-handler.js';

// this const is a useContext hook , it pass the states and props to smallest component in App and it is passive
export const AppThemeContext = React.createContext()

export default function App() {
  const [darkMode, setDarkMode]= React.useState(true)
  const [language, setLanguge]= React.useState('english')
  const [workSamples, setWorkSamples]= React.useState(workSamplesObj.workSamplesObj)
  const [currentWorkSample, setCurrentWorkSample]= React.useState(0)

  // this useEffect hook synchronize workSamples and currentWorkSample state and it is passive
  React.useEffect(() => {
    setWorkSamples(prevSamples => {
      const newArray = []
      for(let i=0; i < prevSamples.length ; i++) {
        const prevSample = prevSamples[i]
        if(prevSample.id === currentWorkSample) {
          newArray.unshift({...prevSample, display: 'block'})
        }else {
          newArray.push({...prevSample, display: 'none'})
        }
      }
      return newArray
    })
  },[currentWorkSample])

  // this useEffect get language and dark mode arguments and set className of elements
  React.useEffect(()=>{
    uiHandler(language, darkMode)
  },[ ,language,darkMode])

  // this function increments and decrements the current sample value and it is active
  function handleCurrentSample (n){
    setCurrentWorkSample((prevCurrent)=>{
      if( prevCurrent+n >= 0 && prevCurrent + n <= WorkSamples.length ) {
        return (prevCurrent + n)
      }else{return prevCurrent}
    })
  }

  // this functions handel toggles language and darkMode
  function handeleToggleLanguage (){
    setLanguge(language === 'english'? 'persian' : 'english')
  }
  function handeleToggleDarkMode (){
    setDarkMode(darkMode == true? false : true)
  }

  return(
    <AppThemeContext.Provider value={{language, darkMode}}>
    <main className='main' id='main' style={{height: window.innerHeight*3}}>
      <header className='header'>
        <NavBar/>
      </header>
      <section id='intrduceSection' style={{height: window.innerHeight }}>
        <Intrduce/>
      </section>
      <section id='workSamplesSection' style={{height:window.innerHeight, top:window.innerHeight}}>
        <WorkSamples
          workSamples={workSamples}
          currentWorkSample={currentWorkSample}
          handleCurrentSample={handleCurrentSample}
        />
      </section>
      <section id='aboutSection' style={{height:window.innerHeight, top:window.innerHeight*2}}>
        <About/>
      </section>
        <div className='setting-container' id='setting-container'>
          <button onClick={handeleToggleDarkMode}>Mode</button>
          <button onClick={handeleToggleLanguage}>Lan</button>
        </div>
    </main>
    </AppThemeContext.Provider>
  )
}