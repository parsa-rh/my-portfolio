import React, { Component } from 'react';
import Topnavbar from './topnavC';
import Rightnav from './righitnavC';
import Skills from './skillsC';
import Jobcanvas from './canvasCircle';


class Center extends Component {
    onLeftnavwidthCenter = ()=>{
        this.props.onLeftnavwidth()
    }

    onRightavwidthCenter = ()=>{
        this.props.onRightnavwidth()
    }

    render() { 
        return (
         <div className='center' style={{ marginLeft:this.props.centermarginleft, marginRight: this.props.centermarginright}} >
          <Topnavbar 
            onLeftnavwidthCenter={this.onLeftnavwidthCenter}
            onRightavwidthCenter={this.onRightavwidthCenter}
           />
            <article className="circleArticle" id="circleArticle">
                <Jobcanvas 
                />
            </article>

            <article>
                <div class="skillsBorder" id="skillsBorder">
                    <Skills
                     skillsarray={this.props.skillsarray}
                     skilldeleteHandel={this.props.skilldeleteHandel}
                    />
                </div>
            </article>
         </div>
        );
    }
}
 
export default Center;