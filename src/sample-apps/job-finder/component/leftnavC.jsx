import React, { Component } from 'react';
import style from './job-finder.css';

class Leftnav extends Component {
    state = { 
        salaryValue:100,
        hour : 1,
        industry : 0,
        skills : 0,
     } 

     hendelSalaryRange = ()=>{
         const salaryInput = document.getElementById('salaryValueSlider').value;
        this.setState({salaryValue : salaryInput})
     }

     handelHourRange = () => {
        const hour = document.getElementById('workHourValueSlider').value;
        this.setState({hour : hour});
     }

     handelIndustryRange = () =>{
         const industry = document.getElementById("industryValueSlider").value;
         this.setState({industry : industry});
     }

     handelSkillRange = () =>{
        const skills = document.getElementById('skillsValueSlider').value;
        this.setState({skills : skills});
     }

     handelAcction = () =>{
         const widthValue = document.getElementById('leftNav').style.width;
        widthValue==0 ? this.setState({widthValue : 250}) : this.setState({widthValue : 0});

    }

   render() { 
        return (
            <nav className='leftSideNav' id='leftNav' style={{width:this.props.leftnavwidth}}>
                <div className='border'>
                    <p className="leftSideNavText">How much do you need to get paid?</p>
                    <p className="leftSideNavText" >Salary:<span className="leftSideNavText" id="salaryValue">{this.state.salaryValue}</span>$</p>
                    <input type="range" className="slider" id="salaryValueSlider" min="100" max="9999" onChange={this.hendelSalaryRange} value={this.state.salaryValue} ></input>
                </div>

                <div className='border'>
                    <p className='leftSideNavText'>How long should a work week be?</p>
                    <p className="leftSideNavText">work hour:<span className="leftSideNavText" id="workHourValue">{this.state.hour}</span>hour</p>
                    <input type="range" className="slider" id="workHourValueSlider" min="1" max="10"
                    onChange={this.handelHourRange} value={this.state.hour}></input>
                </div>

                <div className="border">
                    <p className="leftSideNavText">How important is it to work in the same industry?</p>
                     <p className="leftSideNavText" >Industry : <span className="leftSideNavText" id="industryValue">{this.state.industry}% </span></p>
                     <input type="range" className="slider" id="industryValueSlider" min="0" max="100" onChange={this.handelIndustryRange} value={this.state.industry} ></input>
                </div>

                <div className="border">
                    <p className="leftSideNavText">How important is it to use your existing skill?
                    <br />Skills slider value%</p>
                    <p className="leftSideNavText" >Skills value : <span className="leftSideNavText" id="skillsValue">{this.state.skills}%</span></p>
                    <input type="range" className="slider" id="skillsValueSlider" min="0" max="100" onChange={this.handelSkillRange} value={this.state.skills}/>
                </div> 

                <div className="border">
                    <p className="leftSideNavText">What education requirements would you consider?</p>
                    <input type="radio" className="radioButton" id="dce1" name="educationValueRadioButton" value="DCE1"/>
                    <label for="dce1" className="leftSideNavText">Dynamic choice1</label><br />
                    <input type="radio" className="radioButton" id="dce2" name="educationValueRadioButton" value="DCE2"/>
                    <label for="dce2" className="leftSideNavText">Dynamic choice2</label><br />
                    <input type="radio" className="radioButton" id="dce3" name="educationValueRadioButton" value="DCE3"/>
                    <label for="dce3" className="leftSideNavText">Dynamic choice3</label><br />
                    <input type="radio" className="radioButton" id="dce4" name="educationValueRadioButton" value="DCE4"/>
                    <label for="dce4" className="leftSideNavText">Dynamic choice4</label><br /> <br />
                </div>

                <div className="border">
                    <p className="leftSideNavText">What is most important to you?</p>
                    <input type="radio" className="radioButton" id="dci1" name="importantTValueRadioButton" value="DCI1"/>
                    <label for="dci1" className="leftSideNavText">Dynamic choice1</label><br />
                    <input type="radio" className="radioButton" id="dci2" name="importantTValueRadioButton" value="DCI2"/>
                    <label for="dci2" className="leftSideNavText">Dynamic choice2</label><br />
                    <input type="radio" className="radioButton" id="dci3" name="importantTValueRadioButton" value="DCI3"/>
                    <label for="dci3" className="leftSideNavText">Dynamic choice3</label><br />
                    <input type="radio" className="radioButton" id="dci4" name="importantTValueRadioButton" value="DCI4"/>
                    <label for="dci4" className="leftSideNavText">Dynamic choice4</label><br /><br />
                </div> <br />
                <button className="leftNavBarbutton" id="submitButton" onClick={this.handelAcction} >submit</button>
            </nav>
        );
        
    }
}
 
export default Leftnav;