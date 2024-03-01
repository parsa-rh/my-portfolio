import React from "react";
import Cv from "./cv.jsx";

export default function PrintPage (props) {
    return(
        <div className="cvm-print-page">
            <div className="cvm-pp-a4size">
                {<Cv/>}
            </div>
                <button onClick={window.print}>Print CV</button>
        </div>
    )
}