import React, { Component } from 'react';
import logo from './logo.svg';
import style from './job-finder.css';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


class Topnavbar extends Component {

    render() { 
        return (
            <div className='topnav'>
              <a className='leftSpan' onClick={this.props.onLeftnavwidthCenter} >&#9776;</a>
              <img src={logo} className="App-logo" alt="logo" />
              <a className='rightSpan' onClick={this.props.onRightavwidthCenter}>&#9776;</a>
            </div>
        );
    }
}
 
export default Topnavbar;