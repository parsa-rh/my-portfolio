import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { CvInfoPro } from "../CvMaker";

export default function Cv (props){
    const {cvUiState,cvUserInfo} = React.useContext(CvInfoPro);
    
    return (
        <div className="cv-print-page">
            <div className="cv-container">
            <div className="cv" style={{backgroundImage : cvUiState.backGroundPicture}}>

                <div className="cv-header">
                    <img className="cv-user-image" src={cvUserInfo.userPicture}/>
                    <h2 className="cv-user-fullname">{cvUserInfo.fullName}</h2>
                    <h3 className="cv-user-profession">{cvUserInfo.profession}</h3>
                </div>

                {/* <div className="cv-body"> */}

                    <div className="cv-info">

                        <div className="cv-skills-container">
                            <h3>Skills</h3>
                            {cvUserInfo.skills.map (s => <Skill 
                                key={s.id} 
                                skillName= {s.skillName} 
                                skillPoint={s.skillPoint}
                            />)}
                        </div>
                        
                        <div className="cv-contacts-container">
                            <h3>Contacts</h3>
                            {cvUserInfo.contact.map ( c => <Contacts 
                                key={c.id}
                                contactName={c.contactName}
                                contactLink={c.contactLink}
                            />)}
                        </div>

                    </div>

                    <div className="cv-description-container ">
                        <div className= "cv-profile-container ">
                            <h3>Profile</h3>
                            <p>{cvUserInfo.profile}</p>
                        </div>
                        <div className="cv-softSkills-container ">
                            <h3>Soft Skills</h3>
                            <p>{cvUserInfo.softSkills}</p>
                        </div>
                        <div className="cv-education-container ">
                            <h3>Educations</h3>
                            {cvUserInfo.education.map(e =><University
                                key={e.id}
                                title={e.title}
                                institution={e.institution}
                                location={e.location}
                                start={e.start}
                                end={e.end}
                                notend={e.notend}
                            />)}
                            <div className="cv-sertifications-container">
                                <h3>Certifications</h3>
                                {cvUserInfo.certificate.map(c =><Certificate
                                key={c.id}
                                title={c.title}
                                institution={c.institution}
                                location={c.location}
                                date={c.date}
                                />)}
                            </div>
                        </div>
                    </div>

                {/* </div> */}
            </div> 
            </div>
            <button onClick={window.print}>Print CV</button>
        </div>
    )
}

//this is skill function component 
function Skill (props) {
    let active = 'cv-skill-span-active'
    return(
        <div className="cv-single-skill-container">
            <h4>{props.skillName}</h4>
            <div className="cv-span-skill-points">
                <span className={`cv-skill-span-inactive ${props.skillPoint >= 1 ? active : '' }`}/>
                <span className={`cv-skill-span-inactive ${props.skillPoint >= 2 ? active : '' }`}/>
                <span className={`cv-skill-span-inactive ${props.skillPoint >= 3 ? active : '' }`}/>
                <span className={`cv-skill-span-inactive ${props.skillPoint >= 4 ? active : '' }`}/>
                <span className={`cv-skill-span-inactive ${props.skillPoint >= 5 ? active : '' }`}/>
                <label>{props.skillPoint}/5</label>
            </div>
        </div>
    )
}

//this is cantact social link component
function Contacts (props) {
    return(
        <div className='cv-single-contact-container'>
            <h4>{props.contactName}</h4>
            <a href={props.contactLink}>{props.contactLink}</a>
        </div>
    )
}

//this is University single component
function University (props) {
    return(
        <div className="cv-single-education">
            <h4>{props.title}</h4>
            <h5>University : {props.institution}</h5>
            <h5>Location : {props.location}</h5>
            <h5>Date : {props.start} -{ props.notend == true ? ' Now' : props.end }</h5>
        </div>
    )
}

// this is certificate single component
function Certificate (props) {
    return(
        <div className="cv-single-certificate">
            <h4>{props.title}</h4>
            <h5>Institution : {props.institution}</h5>
            <h5>Location : {props.location}</h5>
            <h5>Date : {props.date}</h5>
        </div>
    )
}