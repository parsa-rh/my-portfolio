import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JobFinderApp from "./sample-apps/job-finder/JobFinderApp.js";
import CvMaker from "./sample-apps/cv-maker/CvMaker";
import Calculator from "./sample-apps/calculator/Calculator";

export default function Router(){
    // const EnglishTheme = React.lazy(()=> import('./component/english-theme.jsx'));
    // const PersianTheme = React.lazy(()=> import('./component/persian-theme.jsx'));
    // const [languageTheme, setLangugeTheme] = React.useState(<EnglishTheme/>);

    // React.useEffect(()=> {
    //     setLangugeTheme(localStorage.getItem('anguage') || 'english')
    // })

    // const ThemeSelector = ()=>{
    //     const ChosenTheme = localStorage.getItem('anguage') || 'english';
    //     return (
    //       <>
    //         <React.Suspense fallback={<></>}>
    //           {ChosenTheme === 'english'? <EnglishTheme/> : <PersianTheme/>} 
    //           {/* {languageTheme} */}
    //           {<App/>}
    //         </React.Suspense>
    //       </>
    //     )
    //   }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                {/* <Route path="/" element={<ThemeSelector/>}/> */}
                <Route path="JobFinderApp" element = {<JobFinderApp/>}/>
                <Route path="CvMaker/*" element = {<CvMaker/>}/>
                <Route path="Calculator" element = {<Calculator/>}/>
            </Routes>
        </BrowserRouter>
    )
}