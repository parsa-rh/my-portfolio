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
            if (language === 'english'){
                document.getElementById('about-contact-btn').setAttribute('class', 'po-active-about-btn')
            }else{
                document.getElementById('about-contact-btn').setAttribute('class', 'po-active-about-btn-persian')
            }
        }else{
            if (language === 'english'){
                document.getElementById('about-contact-btn').setAttribute('class', 'po-deactive-about-btn')
            }else{
                document.getElementById('about-contact-btn').setAttribute('class', 'po-deactive-about-btn-persian')
            }
        }

        if (currentTab === 'aboutApp'){
            if (language === 'english'){
                document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-active-about-btn')
            }else{
                document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-active-about-btn-persian')
            }
        }else{
            if (language === 'english'){
                document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-deactive-about-btn')
            }else{
                document.getElementById('about-aboutApp-btn').setAttribute('class', 'po-deactive-about-btn-persian')
            }
        }
        
        if (currentTab === 'aboutMe'){
            if (language === 'english'){
                document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-active-about-btn')
            }else{
                document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-active-about-btn-persian')
            }
        }else{
            if (language === 'english'){
                document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-deactive-about-btn')
            }else{
                document.getElementById('about-aboutMe-btn').setAttribute('class', 'po-deactive-about-btn-persian')
            }
        }
    },[,currentTab,language])

    return(
        <div className='about-container' id='about-container'>
            <div className='about-nav-container' id='about-nav-container'>
                <button onClick={()=>setCurrentTab('contact')} className='about-nav-btn' id='about-contact-btn'>{language === 'english' ? 'Contact':'ارتباط'}</button>
                <button onClick={()=>setCurrentTab('aboutApp')} className='about-nav-btn' id='about-aboutApp-btn'>{language === 'english' ? 'About App' : 'درباره برنامه'}</button>
                <button onClick={()=>setCurrentTab('aboutMe')} className='about-nav-btn' id='about-aboutMe-btn'>{language === 'english' ? 'About Me' : 'درباره من'}</button>
            </div>
            <div className='about-info-container' id='about-info-container'>
                {activeTab}
            </div>
        </div>
    ) 
}

function Contact () {
    const {language} = React.useContext(AppThemeContext)
    function copySpanClick(event){
        // window.open('https://www.linkedin.com/in/parsa-rahmanian-8150211b1/')
        navigator.clipboard.writeText(event.target.innerText)
        alert('Copied to clipboard')
    }
    return(
        <div className='about-single-info-container'>
            <h1>{language === 'english' ? 'Contact' : 'ارتباط'}</h1>
            <div className='about-single-content'>
                <h3>E-Mail</h3>
                <span id='about-email-span' onClick={copySpanClick} title='click to copy'>parsa.rahmanian8@gmail.com</span>
            </div>
            <div className='about-single-content'>
                <h3>WhatsApp</h3>
                <span id='about-github-span' onClick={copySpanClick} title='click to copy'>+989185913409</span>
            </div>
            <div className='about-single-content'>
                <h3>LinkedIn</h3>
                <span id='about-github-span' onClick={copySpanClick} title='click to copy'>parsa-rh</span>
            </div><div className='about-single-content'>
                <h3>GitHube</h3>
                <span id='about-github-span' onClick={copySpanClick} title='click to copy'>parsa-rh</span>
            </div>
            <div className='about-single-content'>
                <h3>WhatsApp</h3>
                <span id='about-github-span' onClick={copySpanClick} title='click to copy'>+989185913409</span>
            </div>
        </div>
    )
}

function AboutApp () {
    const {language} = React.useContext(AppThemeContext)
    return(
        <div className='about-single-info-container'>
            <h1>{language === 'english' ? 'About App' : 'درباره برنامه'}</h1>
        </div>
    )
}

function AboutMe () {
    const {language} = React.useContext(AppThemeContext)
    return(
        <div className='about-single-info-container'>
            <h1>{language === 'english' ? 'About Me' : 'درباره من'}</h1>
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