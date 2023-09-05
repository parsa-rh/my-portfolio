import React, { Component } from 'react';

class Skills extends Component {
    render() { 
        return (
          
            <ul >
                {this.props.skillsarray.map(skill =>(
                    <SkillObj
                    key={skill.id}
                    skillsarray={this.props.skillsarray}
                    skill={skill}
                    skilldeleteHandel={this.props.skilldeleteHandel}
                    />))}
            </ul>
        );
    }
}
 
export default Skills;





// ----------------------------------------------------------





class SkillObj extends Component {

    formatskill(){
        const {value}=this.props.skill;
        return value;
    }



    render() { 
        return (
           <span>
               <li className='skillobj'> {this.formatskill()} <span onClick={()=>
                this.props.skilldeleteHandel(this.props.skill.id)}
                className='closeskillbtn'
                >{"\u00D7"}</span> </li>
               
           </span>
        );
    }
}
