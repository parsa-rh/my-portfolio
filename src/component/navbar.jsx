import React from 'react';
import { AppThemeContext } from '../App';

export default function Navbar (){
    const {language} = React.useContext(AppThemeContext)

    return(
        <div className='po-navbar' id='po-navbar'>
            <div className='po-navbar-logo-container'>
                <h2>ParsaRh</h2>
            </div>
            <div className="po-navbar-links" id='po-navbar-links'>
                <a href={'#intrduceSection'}>
                    {language==="english" ? "Home" : "خانه"}</a>
                <a href={'#workSamplesSection'}>
                    {language==="english" ? "Samples" : "نمونه ها"}</a>
                <a href={'#aboutSection'}>
                    {language==="english" ? "About" : "درباره"}</a>
            </div>
            <div className='po-navbar-contact-container'>
                <a href={'#aboutSection'}>{language==="english" ? "Contact" : "ارتباط"}</a>
            </div>
        </div>
    )
}