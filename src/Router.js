import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JobFinderApp from "./sample-apps/job-finder/JobFinderApp.js";
import CvMaker from "./sample-apps/cv-maker/CvMaker";
import Calculator from "./sample-apps/calculator/Calculator";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="JobFinderApp" element= {<JobFinderApp/>}/>
                <Route path="CvMaker/*" element= {<CvMaker/>}/>
                <Route path="Calculator" element= {<Calculator/>}/>
            </Routes>
        </BrowserRouter>
    )
}