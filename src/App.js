import React, { useEffect, useContext, createContext} from 'react';
import style from './component/style.css'
import NavBar from './component/navbar';
import Intrduce from './component/intrduce';
import WorkSamples from './component/work-samples.jsx'
import About from './component/about';

// this const is a useContext hook , it pass the states and props to smallest component in App and it is passive
const AppContext = React.createContext()

export default function App() {
  const [language, setLanguge]= React.useState('english')
  const [workSamples, setWorkSamples]= React.useState([
          {id: 0, display: 'none', name: 'Calculater', discribe:'this is a test for fun first sample and it will be use full for evrey thing and this is a text test i just type it for more line wrting'},
          {id: 1, display: 'none', name: 'snake', discribe:'u are my wish u are'}
        ])
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

  // this function increments and decrements the current sample value and it is active
  function handleCurrentSample (n){
    setCurrentWorkSample((prevCurrent)=>{
      if( prevCurrent+n >= 0 && prevCurrent + n <= WorkSamples.length ) {
        return (prevCurrent + n)
      }else{return prevCurrent}
    })
    console.log(currentWorkSample)
  }

  return(
    <AppContext.Provider value={language}>
    <main  style={{height: window.innerHeight*3}}>
      <header className='header'>
      <AppContext.Provider value={language}>
        <NavBar 
          language={language}
        />
        </AppContext.Provider>
      </header>
      <section id='intrduceSection' style={{height: window.innerHeight }}>
        <Intrduce
          language={language}
        />
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
    </main>
    </AppContext.Provider>
  )
}