import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import style from './job-finder.css';

class Rightnav extends Component {

    onskillenterHandel = (y) =>{
        if (y.which === 13) {
            this.props.setskillhandel();
            y.preventDefault();
            document.getElementById('skillsInput').value='';
          };
    }
    
    onskilldeleteHandel=()=>{
        document.getElementById('skillsInput').value='';
    }

    onjobdeleteHandel=()=>{
        document.getElementById('jobInput').value='';
    }

    onnamedeleteHandel=()=>{
        document.getElementById('nameImput').value='';
    }

    render() { 
        return (
            <nav className="rightSideNav" id="rightSideNav" style={{width: this.props.rightnavwidth}}>

                <div className="rightSideNavBorder">
                    <div className='divNavBarInput'>
                        <label className="navBarLabel">You'r name</label>
                        <input type="text" className="navBarInput" id="nameImput" placeholder="type..."/>
                        <button className="deletButton" id="alterClearButton" onClick={this.onnamedeleteHandel}>&times;</button>
                    </div>
                </div>

                <div className="rightSideNavBorder">
                    
                    <div className='divNavBarInput'>
                        <label className="navBarLabel">Job over the last 5 years</label>
                        <input type="text" className="navBarInput" id="jobInput" placeholder="type..."/>
                        <button className="deletButton" id="jobClearButton" onClick={this.onjobdeleteHandel}>&times;</button>
                        {/* <button className="addButton" id="alterAddButton">add job</button> */}
                    </div>
                </div>

                <div className="rightSideNavBorder">
                    <div className='divNavBarInput'>
                    <label className="navBarLabel">Add skills</label>
                        <input type="text" className="navBarInput" id="skillsInput" placeholder="type..."
                        onKeyUp={this.onskillenterHandel} ></input>
                        <button className="deletButton" id="skillClearButton" onClick={this.onskilldeleteHandel}>&times;</button>
                        {/* <button className="addButton" id="skillsAddButton" onClick={this.props.setskillhandel}>add skill</button> */}
                    </div>
                    
                </div>

                {/* <div className="rightSideNavBorder">
                    <form className="searchForm" style="margin:auto;max-width:300px">
                    <input type="search" className="searchInput" id="explorOtherJob" placeholder="Explore pathway for other job type"/>
                    <button type="submit">*</button>
                    </form>
                    <p>Search form</p>
                </div> */}

                
            </nav>
                    );
                }
            }
 
export default Rightnav;