import React, { useEffect, useContext, createContext, Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './component/portfolio.css'
// import './component/work-samples.css'
import NavBar from './component/navbar';
import Intrduce from './component/intrduce';
import WorkSamples from './component/work-samples.jsx'
import About from './component/about';
import workSamplesObj from './samples-obj.json'
// import uiHandler from './component/ui-handler.js';

// this const is a useContext hook , it pass the states and props to smallest component in App and it is passive
export const AppThemeContext = React.createContext()

export default function App() {
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
          newArray.push({...prevSample, visibility: 'visible'})
        }else {
          newArray.unshift({...prevSample, visibility: 'hidden'})
        }
      }
      // uiHandler()
      return newArray
    })
  },[currentWorkSample])

  // this useEffect get language and dark mode arguments and set className of elements
  // React.useEffect(()=>{
  //   uiHandler(language)
  // },[ ,language,currentWorkSample,workSamples])
  // ______________________________________________________________________^^^^^^^^^^
  // moshkele work-samples ehtemalan az injast 


  // this function increments and decrements the current sample value and it is active
  function handleCurrentSample (n){
    setCurrentWorkSample((prevCurrent)=>{
      if( prevCurrent+n >= 0 && prevCurrent + n <= workSamples.length-1 ) {
        return (prevCurrent + n)
      }else{return (prevCurrent)}
    })
    console.log(currentWorkSample, WorkSamples.length, workSamples.length)
  }
  
  // this functions handel toggles language and darkMode
  function handeleToggleLanguage (){
    setLanguge(language === 'english'? 'persian' : 'english')
    // uiHandler(language)
  }
  return(
    <AppThemeContext.Provider value={{language}}>
        <main className='po-main' id='po-main' style={{height: window.innerHeight*3}}>
          {/* <ThemeSelector 
            language={language}
          /> */}
        {/* {language === 'english' ? (
          <link rel="stylesheet" href='./component/portfolio.css' />
          ) : (
            <link rel="stylesheet" href='./component/work-samples.css' />
          )} */}

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
            <NavBar/>
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
          </section>
            <div className='setting-container' id='setting-container'>
              <button onClick={handeleToggleLanguage}>Lan</button>
            </div>
        </main>
    </AppThemeContext.Provider>
  )
}

// function ThemeSelector(props) {
//     const [chosenTheme, setChosenTheme] = React.useState()
//     const EnglishTheme = React.lazy(()=> import('./component/english-theme.jsx'));
//     const PersianTheme = React.lazy(()=> import('./component/persian-theme.jsx'));
    
//     React.useEffect(()=>{
//       setChosenTheme(()=>{
//         if (props.language === 'english') {
//           console.log('english active')
//           return (<EnglishTheme/>);
//         } else {
//           console.log('persian active')
//           return (<PersianTheme/>);
//         }
//       })
//       console.log(chosenTheme === <EnglishTheme/> ? 'en' : 'pe' , props.language)
//     },[,props.language])
//     return (
//       <>
//         <React.Suspense fallback={<></>}>
//           {chosenTheme}
//         </React.Suspense>
//       </>
//     )
//   }

  // function ThemeSelector(props) {
  //   const [chosenTheme, setChosenTheme] = React.useState();
  //   const EnglishTheme = React.lazy(() => import('./component/english-theme.jsx'));
  //   const PersianTheme = React.lazy(() => import('./component/persian-theme.jsx'));
  
  //   React.useEffect(() => {
  //     if (props.language === 'english') {
  //       setChosenTheme(<EnglishTheme />);
  //     } else {
  //       setChosenTheme(<PersianTheme />);
  //     }
  //     console.log(chosenTheme === <EnglishTheme /> ? 'en' : 'pe', props.language);
  //   }, [props.language]);
  
  //   return (
  //     <>
  //       <React.Suspense fallback={<></>}>
  //         {chosenTheme}
  //       </React.Suspense>
  //     </>
  //   );
  // }

  // function ThemeSelector(props) {
  //   const [chosenTheme, setChosenTheme] = React.useState(null);
  //   const EnglishTheme = React.lazy(() => import('./component/english-theme.jsx'));
  //   const PersianTheme = React.lazy(() => import('./component/persian-theme.jsx'));
  
  //   React.useEffect(() => {
  //     if (props.language === 'english') {
  //       setChosenTheme('english');
  //     } else {
  //       setChosenTheme('persian');
  //     }
  //   }, [props.language]);
  
  //   return (
  //     <>
  //       <React.Suspense fallback={<></>}>
  //         {chosenTheme === 'english' ? <EnglishTheme /> : <PersianTheme />}
  //       </React.Suspense>
  //     </>
  //   );
  // }

  // function ThemeSelector(props) {
  //   const [chosenTheme, setChosenTheme] = React.useState(null);
    
  //   React.useEffect(() => {
  //     if (props.language === 'english') {
  //       import('./component/english-theme.jsx').then(module => {
  //         setChosenTheme(() => module.default);
  //       });
  //     } else {
  //       import('./component/persian-theme.jsx').then(module => {
  //         setChosenTheme(() => module.default);
  //       });
  //     }
  //   }, [props.language]);
  
  //   return (
  //     <>
  //       <React.Suspense fallback={<></>}>
  //         {chosenTheme}
  //       </React.Suspense>
  //     </>
  //   );
  // }