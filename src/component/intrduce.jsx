import React from 'react';
import { AppContext } from '../App';
import { AppThemeContext } from '../App';

export default function Intrduce (props) {
const {language} = React.useContext(AppThemeContext)
return (
    <div className='intrduse-container' id='intrduse-container'>
        <div>
            <h1>{language==="english" ? "Hi, Welcome To My Portfolio Page" : "درود، به صفحه نمونه کار های من خوش آمدید"}</h1>
            <h1>{language==="english" ? "I'm Parsa Rahmanian a React.js Developer" : "من پارسا رحمانیان هستم یک توسعه دهنده React.js"}</h1>
        </div>
        <p>{language==="english" ? "It is my honor that you are here. The purpose of this web application is to reflect my skills."
            : "این باعث افتخار من است که شما در این صفحه هستید. هدف این برنامه ی تحت شبکه، انعکاس مهارت های من است." }
        </p>
        <p>{language === "english" ? "You can scroll through some of my samples in the samples section.":"شما می توانید برخی از نمونه های من را در بخش نمونه ها مرور کنید."}</p>
        <p>{language==="english" ? "Also you can find information about me and this portfolio in the About section." : "همچنین می توانید اطلاعاتی در مورد من و این portfolio در بخش درباره پیدا کنید."}</p>
    </div>
)
}