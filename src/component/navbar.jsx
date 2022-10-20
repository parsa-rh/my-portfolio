import React from 'react';

export default function Navbar (props){
    return(
        <div className="navbar" id='navbar'
        style={{"flex-direction" : `row${props.language === "english" ? "" : "-reverse"}`}}
        >
            <span>{props.language==="english" ? "Home" : "خانه"}</span>
            <span>{props.language==="english" ? "Samples" : "نمونه ها"}</span>
            <span>{props.language==="english" ? "About" : "درباره"}</span>
        </div>
    )
}