import React from 'react';
import { AppThemeContext } from '../App';

export default function Navbar (){
    const {language, darkMode} = React.useContext(AppThemeContext)

    return(
        <div className="navbar" id='navbar'>
            <a href={'#intrduceSection'}>
                {language==="english" ? "Home" : "خانه"}</a>
            <a href={'#workSamplesSection'}>
                {language==="english" ? "Samples" : "نمونه ها"}</a>
            <a href={'#aboutSection'}>
                {language==="english" ? "About" : "درباره"}</a>
        </div>
    )
}