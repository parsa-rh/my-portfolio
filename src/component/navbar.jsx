import React from 'react';

export default function Navbar (props){
    //const AppContext = React.useContext(AppContext)
    return(
        
        <div className="navbar" id='navbar'
        style={{"flex-direction" : `row${props.language === "english" ? "" : "-reverse"}`}}
        >
            <a href={'#intrduceSection'} id={'home'}>
                {props.language==="english" ? "Home" : "خانه"}</a>
            <a href={'#workSamplesSection'}>
                {props.language==="english" ? "Samples" : "نمونه ها"}</a>
            <a href={'#aboutSection'}>
                {props.language==="english" ? "About" : "درباره"}</a>
        </div>
    )
}