import React from 'react';
import { AppThemeContext } from '../App';
import lanPng from '../img/language-google-translate-48.png'

export default function Navbar (props){
    const {language} = React.useContext(AppThemeContext)
    const [langsDisplay, setLangsDisplay] = React.useState('none')

    React.useEffect(() => {
        // document.addEventListener('touch', (e) => {
        //     if(langsDisplay === 'block' && e.target !== 'button'){
        //         // setLangsDisplay('none')
        //         console.log('setLangsDisplay')
        //     }
        // })
        // document.addEventListener('touchstart',(e)=>{
        //     console.log(e.target)
        //     console.log(e.target === <button/>?'true':'false')
        // })
        if (langsDisplay === 'block'){
            document.getElementById('po-navbar-lang-span').style.animation = 'glowing infinite 1.4s alternate';
        }else{
            document.getElementById('po-navbar-lang-span').style.animation = 'none';
        }
    }, [langsDisplay])


    function handeleLangsContainer(){
        setLangsDisplay(()=>{
            if(langsDisplay === 'block'){
                return 'none'
            }else{
                return 'block'
            }
        })
    }

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
            {/* <div className='po-navbar-contact-container'>
                <a href={'#aboutSection'}>{language==="english" ? "Contact" : "ارتباط"}</a>
            </div> */}
            <div className='po-navbar-lang'>
                <div className='po-navbar-lang-container' onClick={()=>handeleLangsContainer()}>
                    <span id='po-navbar-lang-span'>Language</span>
                    <img src={lanPng} alt='language' />
                    <div className='po-navbar-langs-container' id='po-navbar-langs-container' style={{display:langsDisplay}}>
                        <button onClick={()=>props.handeleLanguage('english')} style={language === 'english'? {color:'#fff'}:{color:'#707070'}}>English</button>
                        <button onClick={()=>props.handeleLanguage('persian')} style={language === 'english'? {color:'#707070'}:{color:'#fff'}}>Persian</button>
                    </div>
                </div>
            </div>
        </div>
    )
}