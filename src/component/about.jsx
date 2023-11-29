import React from 'react';
import { AppThemeContext } from '../App';

export default function About (){
    const {language} = React.useContext(AppThemeContext)
    const [currentTab ,setCurrentTab] = React.useState('contact')
    const [activeTab ,setActiveTab] = React.useState(<Contact/>)

    // this useEffect synchronize the (activeTab) state with (currentTab) state 
    React.useEffect(()=>{
        setActiveTab(()=>{
            if (currentTab === 'contact'){
                return <Contact/>
            } if (currentTab === 'aboutApp') {
                return <AboutApp/>
            } if (currentTab === 'aboutMe') {
                return <AboutMe/>
            }
        });
    },[currentTab])

    // this useEffect handle active ui of navigation btn of about section
    React.useEffect(()=>{
        if (currentTab === 'contact'){
            document.getElementById('about-contact-btn').setAttribute('class', 'po-active-about-btn')
        }else{document.getElementById('about-contact-btn').setAttribute('class', 'po-deactive-about-btn')};

        if (currentTab === 'aboutApp') {
            document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-active-about-btn')
        }else{document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-deactive-about-btn')};

        if (currentTab === 'aboutMe') {
            document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-active-about-btn')
        }else{document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-deactive-about-btn')};
    },[,currentTab])

    return(
        <div className='about-container' id='about-container'>
            <div className='about-nav-container'>
                <button onClick={()=>setCurrentTab('contact')} className='about-nav-btn' id='about-contact-btn'>{language === 'english' ? 'Contact':'ارتباط'}</button>
                <button onClick={()=>setCurrentTab('aboutApp')} className='about-nav-btn' id='about-aboutApp-btn'>{language === 'english' ? 'About App' : 'درباره ی برنامه'}</button>
                <button onClick={()=>setCurrentTab('aboutMe')} className='about-nav-btn' id='about-aboutMe-btn'>{language === 'english' ? 'About Me' : 'درباره ی من'}</button>
            </div>
            <div className='about-info-container'>
                {activeTab}
            </div>
        </div>
    ) 
}

function Contact () {
    return(
        <div className='about-single-info-container'>
            <h1>Contact</h1>
        </div>
    )
}

function AboutApp () {
    return(
        <div className='about-single-info-container'>
            <h1>AboutApp</h1>
        </div>
    )
}

function AboutMe () {
    return(
        <div className='about-single-info-container'>
            <h1>AboutMe</h1>
        </div>
    )
}






{/* <div className='aboutApp' id='aboutApp'>
    <h1>{language === 'english'? 'ABOUT WORK SAMPLE َAPP' : 'درباره برنامه ی نمونه کار'}</h1>
    <p>{language === 'english'? 'Work samples is a react.js web appliction' : ' است React.js صفحه ی نمونه کار یک برنامه ی تحت'}</p>
    <p>{language === 'english'? 'Writing this app was started in october 2022' : 'نوشتن این برنامه در مهر ماه 1401 شروع شد'}</p>
    <p>{language === 'english'? 'The purpose was showing some ability of writer and share a-few work sampleP' : 'هدف نشان دادن مقداری از توانایی های نویسنده و به اشتراک گذاشتن چند نمونه کار بود'}</p>
</div>
<div className='aboutMe' id='aboutMe'>
    <h1>{language === 'english'? 'ABOUT ME' : 'درباره من'}</h1>
    <p>{language === 'english'? 'It is an incredible pleasure when you start programming and by combining small functions and logics, you write a big program at the end. Parsa understands this. He has been working in the field of programming for several years and has recently become interested in network programming, machine learning and data science' 
       : 'لذتی باور نکردنی است در زمانی که شما شما شروع به برنامه نویسی میکنید و با کنار هم قرار دان توابع و منطق های کوچک در آخر یک برنامه بزرگ مینویسید.  پارسا این را درک میکند. او چند سالی است که در حوضه ی برنامه نویسی فعالیت دارد و اخیرا به حوضه های برنامه نویسی شبکه ، یادگیری ماشین و علوم دیتا علاقه مند شده'}
    </p>
</div> */}