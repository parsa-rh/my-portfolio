import React, { useEffect } from 'react';
import style from './component/style.css'
import NavBar from './component/navbar';
import Intrduce from './component/intrduce';
import WorkSamples from './component/work-samples.jsx'

export default function App() {
  const [language, setLanguge]= React.useState('english')
  const [workSamples, setWorkSamples]= React.useState([
          {id: 0, display: 'none', name: 'Calculater', discribe:'this is a test for fun first sample'},
          {id: 1, display: 'none', name: 'snake', discribe:'u are my wish u are'}
        ])
  const [currentWorkSample, setCurrentWorkSample]= React.useState(0)

  // this useEffect hook synchronize workSamples and currentWorkSample state
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

  function handelCurrentSample (n){
    setCurrentWorkSample((prevCurrent)=>{
      if(prevCurrent + n >= 0 ) {
        return (prevCurrent + n)
      }else{return prevCurrent}
    })
    console.log(currentWorkSample)
  }
 
  return(
    <main >
      <header className='header'>
        <NavBar 
          language={language}
        />
      </header>
      <section>
        <Intrduce
          language={language}
        />
      </section>
      <section>
        <WorkSamples
          workSamples={workSamples}
          currentWorkSample={currentWorkSample}
          handelCurrentSample={handelCurrentSample}
        />
      </section>
      <section>
        
      </section>
    </main>
  )
}