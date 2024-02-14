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
        alert(language === 'english' ? 'copied successfully' : 'با موفقیت کپی شد')
    }
    return(
        <div className='about-contact-info-container' id='about-contact-info-container'>
            <h1>{language === 'english' ? 'Contact' : 'ارتباط'}</h1>
            <p style={{marginTop:'0'}}>
                {language === 'english' ? "feel free to use any of the links below." : 'در صورت تمایل از هر یک لینک های زیر استفاده کنید.'}
            </p>
            <p>
                {language === 'english' ? "Any communication with you is my pleasure." : 'هر گونه ارتباط  با شما باعث خوشحالی من است.'}
            </p>
            <p>
                {language === 'english' ? "You can go to address by clicking on them" : 'با کلیک کردن بر روی آدرس ها آنهارا باز کنید.'}
            </p>
            <div className='about-contact-single-content'>
                <h3>E-Mail</h3>
                <span id='about-email-span' onClick={copySpanClick} title={language === 'english'?'click to copy e-mail':'برای کپی e-mail کلیک کنید'}>parsa.rahmanian8@gmail.com</span>
            </div>
            <div className='about-contact-single-content'>
                <h3>WhatsApp</h3>
                <span id='about-github-span' onClick={copySpanClick} title={language === 'english'?'click to copy number':'برای کپی شماره کلیک کنید'}>+989185913409</span>
            </div>
            <div className='about-contact-single-content'>
                <h3>LinkedIn</h3>
                <span id='about-github-span' onClick={()=>{window.open('https://www.linkedin.com/in/parsa-rahmanian-771618238/')}} title={language === 'english'? 'click to open profile':'برای باز کردن پروفایل کلیک کنید'}>parsa-rh</span>
            </div><div className='about-contact-single-content'>
                <h3>GitHube</h3>
                <span id='about-github-span' onClick={()=>{window.open('https://github.com/parsa-rh')}} title={language === 'english'? 'click to open profile':'برای باز کردن پروفایل کلیک کنید'}>parsa-rh</span>
            </div>
            <div className='about-contact-single-content'>
                <h3>Instagram</h3>
                <span id='about-github-span' onClick={()=>{window.open('https://www.instagram.com/parsa__rh')}} title={language === 'english'? 'click to open profile':'برای باز کردن پروفایل کلیک کنید'}>parsa__rh</span>
            </div>
        </div>
    )
}

function AboutApp () {
    const {language} = React.useContext(AppThemeContext)
    return(
        <div className='about-aboutApp-info-container' id='about-aboutApp-info-container'>
            <h1>{language === 'english' ? 'About App' : 'درباره برنامه'}</h1>
            {/* <ul> */}
                <p>{language === 'english' ? 'This portfolio is a React.js aplication .' : 'این portfolio یک برنامه React.js است .'}</p>
                <p>{language === 'english' ? 'You can browse it in English and Persian .' : 'شما میتوانیدآن را به زبان اینگلیسی و یا فارسی مرور کنید .'}</p>
                <p>{language === 'english' ? 'Rh-portfolio is written to be easy to develop, edit and reuse .' : 'Rh-pordtfolio طوری نوشته شده است که راحت برای توسعه ، ویرایش و استفاده دوباره باشد .'}</p>
                <p>{language === 'english' ? 'No graphic library is used in this program and the entire user interface is written only with CSS .' : 'در این برنامه هیچ کتاب خانه گرافیکی استفاده نشده و تمام رابط کاربری فقط با CSS  نوشته شده است .'}</p>
                <p>{language === 'english' ? 'It also has a responsive design. This means that the user can experience a unique user interface with a computer or smartphone .' : 'همچنین طراحی واکنش گرایی دارد. به این معنی که کاربر با کامپیوتر و یا با گوشی هوشمند میتواند رابط کاربری منحصر به فردی را تجربه کند .'}</p>
                <p>{language === 'english' ? 'To save costs, the samples are placed in the main program itself, i.e. portfolio ( not as a separate URL ) .' : 'برای صرفه جوی در هزینه ها ، نمونه کارها در خود برنامه اصلی یعنی portfolio قرار گرفته اند (نه به صورت URL جدا گانه) .'}</p>
                <p>{language === 'english' ? 'This program uses React Router technology and JSON data to open the samples page .' : 'این برنامه برای باز کردن صفحه ی نمونه ها از تکنولوژی React Router و داده های JSON  استفاده میکند .'}</p>
                <p>{language === 'english' ? 'All of the front-end processes from design to production build, have been done by developer.' : 'تمامی فرآیندهای فرانت اند از طراحی تا ساخت محصول نهایی، توسط توسعه دهنده انجام شده است .'}</p>
                <p>{language === 'english' ? 'You can find the source code and all the branch of this application in my GitHub profile .' : 'شما می توانید کد منبع و تمام شاخه های این برنامه را در پروفایل GitHub من پیدا کنید.'}</p>
                <p>{language === 'english' ? 'Your feedback about this program is critical to me. If you have any ideas or criticisms, please let me know .' : 'نظر شما در مورد این برنامه برای من حیاتی است. اگر ایده و یا انتقادی دارید لطفاً من را در جریان بگذارید .'}</p>
            {/* </ul> */}
        </div>
    )
}

function AboutMe () {
    const {language} = React.useContext(AppThemeContext)
    return(
        <div className='about-aboutMe-info-container' id='about-aboutMe-info-container'>
            <h1>{language === 'english' ? 'About Me' : 'درباره من'}</h1>
            <p>{language === 'english'? 'As a React.js developer with a background in software engineering, I am passionate about creating highly functional and useful applications.' : 'به‌عنوان یک توسعه‌دهنده React.js با سابقه‌ای در مهندسی نرم‌افزار، علاقه‌مند به ایجاد برنامه‌های کاربردی و با توابع پیچیده هستم.'}</p>
            <p>{language === 'english'? 'I bring a unique blend of logical thinking and creativity to my work, allowing me to approach problems from multiple angles and come up with innovative solutions.':'من ترکیبی منحصربفرد از تفکر منطقی و خلاقیت را در کارم به ارمغان می‌آورم و به من این امکان را می‌دهد که با مشکلات از زوایای مختلف برخورد کنم و راه‌حل‌های خلاقانه ارائه دهم.'}</p>
            <p>{language === 'english'? 'I am committed to learning from the ground up, mastering the fundamentals of programming.': 'من متعهد به یادگیری از پایه و تسلط بر اصول برنامه نویسی هستم.'}</p>
            <p>{language === 'english'? 'My portfolio showcases my dedication to building intuitive user interfaces and scalable, maintainable code that delivers real value to users.':'portfolio من نشان دهنده تعهد من به ایجاد رابط های کاربری بصری و کد قابل نگهداری و مقیاس پذیر است که ارزش واقعی را به کاربران ارائه می دهد.'}</p>
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