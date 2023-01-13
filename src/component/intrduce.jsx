import React from 'react';
import { AppContext } from '../App';
import { AppThemeContext } from '../App';

export default function Intrduce (props) {
const {language, darkMode} = React.useContext(AppThemeContext)
return (
    <div className='intrduse-container' id='intrduse-container'>
        <h1>{language==="english" ? "Welcome" : "دورود"}</h1>
        <p>{language==="english" ? "In the world of objects and functions that are growing every moment by developers, it is our honor that we become although small, but effective member."
            : 'در دنیایه شیع ها و توابع که هر لحظه توسط توسعه دهنده ها در حال رشد است این افتخار ما است که یک عضو هر چند کوچک ولی مواثر واقع شویم' }
        </p>
    </div>
)
}