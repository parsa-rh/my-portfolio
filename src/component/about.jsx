import React from 'react';
import { AppThemeContext } from '../App';

export default function About (){
    const {language, darkMode} = React.useContext(AppThemeContext)
    return(
        <div className='aboutContainer'>
            <div className='aboutApp' id='aboutApp'>
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
            </div>
        </div>
    ) 
}