import React from "react";
import { ReactDOM } from "react";
import style from "./cv-maker.css"
import { BrowserRouter,Routes,Route, json } from "react-router-dom";
import {nanoid} from "nanoid"
import CvMakerHome from "./component/cv-maker-home.jsx";
import Cv from "./component/cv.jsx"
import img from './component/parsa.jpg'
import bimg from './component/background.jpg'

export const CvInfoPro = React.createContext();

export default function CvMaker(props) {
    const [cvUiState, setCvUiState] = React.useState({
        font: '',
        fontColor: "rgba(255,255,255)",
        cvBlure : '',
        backGroundPicture:[bimg],
    })
    const [cvUserInfo, setCvUserInfo] = React.useState({
        fullName:'Parsa Rahmanian',
        profession: 'frontend-developer',
        userPicture: [img],
        skills: [
            {id: nanoid(),skillName: 'JavaScript', skillPoint: '4'},
            {id: nanoid(),skillName: 'ES6', skillPoint: '5'},
            {id: nanoid(),skillName: 'TypeScript', skillPoint: '5'},
            {id: nanoid(),skillName: 'Html,Css', skillPoint: '5'},
            {id: nanoid(),skillName: 'React', skillPoint: '5'},
            {id: nanoid(),skillName: 'Redux', skillPoint: '5'},
            {id: nanoid(),skillName: 'Npm', skillPoint: '5'},
            {id: nanoid(),skillName: 'Rest APIs', skillPoint: '4'},
            {id: nanoid(),skillName: 'Responsive Designe', skillPoint: '4'}
        ],
        contact: [
            {id: nanoid(), contactName: 'Adress', contactLink: 'Hamadan, Iran'},
            {id: nanoid(), contactName: 'Email', contactLink: 'parsa.rahmanian8@gmail.com'},
            {id: nanoid(), contactName: 'WhatsApp', contactLink: '+98 9185913409'},
            {id: nanoid(), contactName: 'Github', contactLink: 'parsa-rh'},
            {id: nanoid(), contactName: 'Linkedin', contactLink: 'parsa-rh'},
        ],
        profile: "Hello Mayflower Recruitment, I'm Parsa I have more than 4 years of experience in computer software engineering and activity in the field of programming for many years, Due to my interest in web development, I started learning JavaScript and now after two years I am fluent in React JS and required libraries. I have not had a contract or official work history until today. But there are several programs that I have written for myself and my friends (This resume is also made by one of the same programs). If you're interested, there's a React app on GitHub link where I've put some of my work samples. It is my pleasure to work in a team cause of my passion for Progress, growing up and making useful real projects.",
        softSkills: 'I am very interested in philosophy, so I try to learn from the basics and deeply. This gives me a broad view of how programs actually work and strong debugging skill. I am comfortable with new libraries and packages. I am creative, determine and forward-looking in my work. the codes I write are clean, reusable, easy to edit and develop in the future. Also, I am a social person who can communicate well with others and I know how much more effective being in a team is than working alone.',
        education: [
            {id:nanoid(), title: 'Bachelor software engineering', institution:'Islamic Azad University', location:'Hamadan', start: '2019/9/15', end: '2023/2/2', notend : true}
        ],
        certificate: [
        {id:nanoid(), title: 'NetWork', institution:'Khaje Nasir academy', location:'hamadan', date: '2018'},
        {id:nanoid(), title: 'SQL Server', institution:'Khaje nasir academy', location:'hamadan', date: '2017'},
        {id:nanoid(), title: 'C# programing', institution:'Khaje Nasir academy', location:'hamadan', date: '2016'}
        ]
    })
    return(
        <CvInfoPro.Provider value={{cvUiState,setCvUiState,cvUserInfo,setCvUserInfo}}>
            <Routes>
                <Route path="/" element={<CvMakerHome/>}/>
                <Route path="Cv" element={<Cv/>}/>
            </Routes>
        </CvInfoPro.Provider>
    )
}