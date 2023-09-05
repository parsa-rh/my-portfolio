import React, { Component } from 'react';
import Center from './component/centerC';
import Leftnav from './component/leftnavC';
import Rightnav from './component/righitnavC';
import style from './component/job-finder.css';

export default class JobFinderApp extends Component{
 constructor(props){
   super(props)
    this.state={
      leftnavwidth : 0,
      centermarginleft : 0,

      rightnavwidth : 0,
      centermarginright : 0,

      skills:[
        {id: 1, value: 'a' },
        {id: 2, value: 'b' },
        {id: 3, value: '3' },
        {id: 4, value: '4' },
      ]
    }
 }

  leftnavwidthHandel = () =>{
    const widthValue = this.state.leftnavwidth
    widthValue ==0? this.setState({leftnavwidth:250}) : this.setState({leftnavwidth:0});
    widthValue ==0? this.setState({centermarginleft:250}) : this.setState({centermarginleft:0});
  }

  rightnavwidthHandel =()=>{
    const widthValue = this.state.rightnavwidth
    widthValue ==0? this.setState({rightnavwidth:250}) : this.setState({rightnavwidth:0});
    widthValue ==0? this.setState({centermarginright:250}) : this.setState({centermarginright:0});
  }
  // 
  setskillhandel = () =>{
    const value = document.getElementById('skillsInput').value ;
    const skills = this.state.skills;
    skills.push({id:skills.length+1 ,value});
    this.setState({skills:skills});
    console.log(value,skills);
  }

  skilldeleteHandel = (skillid)=>{
    const skills = this.state.skills.filter(s => s.id !==skillid)
    this.setState({skills})
  }

  render (){
    return (
      <div className='app' style={{ overflow:'hidden' }}>
        <Center 
          onLeftnavwidth={this.leftnavwidthHandel}
          leftnavwidth={this.state.leftnavwidth}
          centermarginleft={this.state.centermarginleft}

          onRightnavwidth={this.rightnavwidthHandel}
          rightnavwidth={this.state.rightnavwidth}
          centermarginright={this.state.centermarginright}

          skillsarray={this.state.skills}
          skilldeleteHandel={this.skilldeleteHandel}
        />

        <Leftnav
          leftnavwidth={this.state.leftnavwidth} 
        />

        <Rightnav
          rightnavwidth={this.state.rightnavwidth}
          setskillhandel={this.setskillhandel}
        />
      </div>
    )
  }
}


