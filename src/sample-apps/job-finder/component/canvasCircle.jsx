import React, { Component } from 'react';
import style from './job-finder.css';

class Jobcanvas extends Component {
     
    render() { 
        return (
            <canvas className='canvasCircles' id='canvasCircles'></canvas>
        );
    }
}
 
export default Jobcanvas;