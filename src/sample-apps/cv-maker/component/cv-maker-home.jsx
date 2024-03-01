import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {nanoid} from "nanoid"
import style from "../cv-maker.css";
import { CvInfoPro } from "../CvMaker";
import Cv from "./cv";


export default function CvMakerHome (props){
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    const [currentEditorCom, setCurrentEditorCom] = React.useState(<BasicInfo/>)
    const [activeEditorBtn, setActiveEditorBtn] = React.useState('cvm-basicInfo-btn')

    React.useEffect(() => {
        const buttons = document.getElementById('cvm-editor-navigation-user-info').children
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].id === activeEditorBtn? buttons[i].style.color = 'red' : buttons[i].style.color = '#1c135f';
        }
    },[ ,activeEditorBtn])

    return(
        <main className="cvm-home-main" >
            <header className="cvm-header">
                <h2><p className="color-red">RhCV</p>BUILDER</h2>
            </header>
                <div className="cvm-landing">
                    <h1>Build Your Custom<p className="color-red">CV</p></h1>
                    <h2>First fill your personal information by using personal info tab</h2>
                    <h2>Then custom your cv template according to your taste</h2>
                    <h2>At the end download it for free</h2>
                    <div>
                        <h3>Scroll To Start</h3>
                        <h3 className="color-red" style={{margin: '0',fontSize:'6vh'}}>↓</h3>
                    </div>
                </div>
            <div className="cvm-editor">
                <div className="cvm-editor-navigation">
                    <div className="cvm-editor-navigation-header">
                        <button
                            id="cvm-editor-navigationbar-user-btn"
                            style={{borderRight : 'solid 1px #eee', color: 'red'}}
                            onClick={()=>{document.getElementById('cvm-editor-navigation-user-info').style.display = 'block'
                            document.getElementById('cvm-editor-navigation-cvtemplate').style.display = 'none'
                            document.getElementById('cvm-editor-navigationbar-user-btn').style.color = 'red'
                            document.getElementById('cvm-editor-navigationbar-cv-btn').style.color = '#1c135f'
                        }}>Prsonal Info</button>
                        <button
                        id="cvm-editor-navigationbar-cv-btn"
                           onClick={()=>{document.getElementById('cvm-editor-navigation-user-info').style.display = 'none'
                           document.getElementById('cvm-editor-navigation-cvtemplate').style.display = 'block'
                           document.getElementById('cvm-editor-navigationbar-user-btn').style.color = '#1c135f'
                           document.getElementById('cvm-editor-navigationbar-cv-btn').style.color = 'red'
                        }}>Cv template</button>
                    </div>
                    <div className="cvm-editor-navigations">
                        <div className="cvm-editor-navigation-user-info" id="cvm-editor-navigation-user-info" style={{display: 'block'}}>
                            <button className="cvm-navigation-btn" id="cvm-basicInfo-btn" onClick={()=>{{setCurrentEditorCom(<BasicInfo/>)}{setActiveEditorBtn('cvm-basicInfo-btn')}}}>Basic info</button>
                            <button className="cvm-navigation-btn" id="cvm-skills-btn" onClick={()=>{{setCurrentEditorCom(<Skills/>)}{setActiveEditorBtn('cvm-skills-btn')}}}>skills</button>
                            <button className="cvm-navigation-btn" id="cvm-contact-btn" onClick={()=>{{setCurrentEditorCom(<Contact/>)}{setActiveEditorBtn('cvm-contact-btn')}}}>Contact</button>
                            <button className="cvm-navigation-btn" id="cvm-profile-btn" onClick={()=>{{setCurrentEditorCom(<Profile/>)}{setActiveEditorBtn('cvm-profile-btn')}}}>Profile</button>
                            <button className="cvm-navigation-btn" id="cvm-softSkills-btn" onClick={()=>{{setCurrentEditorCom(<SoftSkills/>)}{setActiveEditorBtn('cvm-softSkills-btn')}}}>soft skills</button>
                            <button className="cvm-navigation-btn" id="cvm-education-btn" onClick={()=>{{setCurrentEditorCom(<Education/>)}{setActiveEditorBtn('cvm-education-btn')}}}>Educatian</button>
                            <button className="cvm-navigation-btn" id="cvm-certification-btn" onClick={()=>{{setCurrentEditorCom(<Certifications/>)}{setActiveEditorBtn('cvm-certification-btn')}}}>Certificate</button>
                        </div>
                        <div className="cvm-editor-navigation-cvtemplate" id="cvm-editor-navigation-cvtemplate" style={{display: 'none'}}>
                            <button onClick={()=> alert("This part is not complete")}>Cv Size</button>
                            <button onClick={()=> alert("This part is not complete")}>Basic Structure</button>
                            <button onClick={()=> alert("This part is not complete")}>Font</button>
                            <button onClick={()=> alert("This part is not complete")}>Back Ground</button>
                            <button onClick={()=> alert("This part is not complete")}>Colors</button>
                            <button onClick={()=> alert("This part is not complete")}>...</button>
                        </div>
                    </div>
                    <div className="cvm-editor-navigation-footer">
                        <Link to="PrintPage"><button>Download Cv</button></Link>
                    </div>
                </div>
                <div className="cvm-editor-options-container">
                    <div>{currentEditorCom}</div>
                </div>
            </div>
            <div className="cvm-cv-container">
                <Cv/>
            </div>
            <footer className="cvm-home-footer">
                <h3 >written by @parsa-rh</h3>
            </footer>
        </main>
    )
}



function BasicInfo () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function fullNameOC(event){
        setCvUserInfo(prevInfo =>{return {...prevInfo, fullName: event.target.value}})
    }
    function professionOC(event){
        setCvUserInfo(prevInfo =>{return {...prevInfo, profession: event.target.value}})
    }
    function userPictureOC(event){
        setCvUserInfo(prevInfo =>{return {...prevInfo, userPicture: URL.createObjectURL(event.target.files[0])}})
    }
    return(
        
        <div className="cvm-editor-options">
            <div className="cvm-options-cap">
                <h2>Basic Info</h2>
                <p>type you'r full name and you'r perfesion. and you can upload your profile picture.</p>
            </div>
            <div className="cvm-LaIn-container">
                <label name="fullName">Full Name: </label>
                <input name="fullName" type="text" className="cvm-txt-input" placeholder="full name" onChange={fullNameOC}/>
            </div>
            <div className="cvm-LaIn-container">
                <label name="profession">Profession: </label>
                <input name="profession" type="text" className="cvm-txt-input" placeholder="profession" onChange={professionOC}/>
            </div>
            <div className="cvm-LaUp-container">
                <label name="userPicture">User Picture: </label>
                <input name="userPicture" type="file" accept="image/jpeg, image/png, image/jpg" className="cvm-img-input" onChange={userPictureOC}/>
            </div>
        </div>
    )
}

function Skills () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function addSkillHandler(){
        var skillName = document.getElementById('cvmSkillInput').value;
        var skillPoint = document.getElementById('cvmSkillPointInput').value;
        if (skillPoint > 0 && skillPoint < 6 ){
            setCvUserInfo(prevInfo =>{return {...prevInfo, skills: [...prevInfo.skills, {id: nanoid(), skillName: skillName, skillPoint: skillPoint}]}})
            document.getElementById('cvmSkillInput').value ="";
            document.getElementById('cvmSkillPointInput').value =""
            
        }
        else {alert('Please score your skill point between 1 to 5')}
    }
    function deletSkillHandler(skillId){
        setCvUserInfo(prevInfo =>{return {...prevInfo, skills: prevInfo.skills.filter (skill => skill.id !== skillId)}})
    }
    return(
        <div className="cvm-editor-options">
            <div className="cvm-options-cap">
                <h2>Skills</h2>
                <p>type you'r skill name and you'r skill point. and you can add your skill.</p>
            </div>
            <div className="cvm-LaIn-container">
                <label name="skill">Skill Name:</label>
                <input name="skill" type="text" className="cvm-txt-input" id="cvmSkillInput" placeholder="skill"/>
            </div>
            <div className="cvm-LaIn-container">
                <label name="skill-point">Skill Point:</label>
                <input name="skill-point" type="text" className="cvm-number-input" id="cvmSkillPointInput" placeholder="1 to 5" />
            </div>
            <div className="cvm-addBtn-container">
                <button onClick={addSkillHandler}>Add</button>
            </div>
            <div className="cvm-units-container">
                {cvUserInfo.skills.map(s=><DeleteSkill
                    key={s.id}
                    skillId={s.id}
                    name={s.skillName}
                    deletSkillHandler={deletSkillHandler}
                />)}
            </div>
        </div> 
    )

    function DeleteSkill (props){
        return(
            <span key={props.skillId}><button onClick={()=>props.deletSkillHandler(props.skillId)}>☓</button>{props.name}</span>
        )
    }
}

function Contact () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)

    function addContactHandler(){
        var contactName = document.getElementById('cvmContactInput').value;
        var contactLink = document.getElementById('cvmContactPointInput').value;
        setCvUserInfo(prevInfo =>{return {...prevInfo, contact: [...prevInfo.contact, {id: nanoid(), active: true,contactName: contactName, contactLink: contactLink}]}})
        document.getElementById('cvmContactInput').value ="";
        document.getElementById('cvmContactPointInput').value =""
    }

    function deletContactHandler(contactId){
        setCvUserInfo(prevInfo =>{return {...prevInfo, contact: prevInfo.contact.filter (contact => contact.id !== contactId)}})}

    return(
        <div className="cvm-editor-options">
            <div className="cvm-options-cap">
                <h2>Contact</h2>
                <p>type you'r contact name and you'r contact link. and you can add your contact.</p>
            </div>
            <div className="cvm-LaIn-container">
                <label name="contact">Contact Name:</label>
                <input name="contact" type="text" className="cvm-txt-input" id="cvmContactInput" placeholder="contact"/>
            </div>
            <div className="cvm-LaIn-container">
                <label name="contact-point">Contact Address:</label>
                <input name="contact-point" type="text" className="cvm-number-input" id="cvmContactPointInput" placeholder="link" />
            </div>
            <div className="cvm-addBtn-container">
                <button onClick={addContactHandler}>Add</button>
            </div>
            <div className="cvm-units-container">
                {cvUserInfo.contact.map(c=><DeleteContact
                    key={c.id}
                    contactId={c.id}
                    name={c.contactName}
                    deletContactHandler={deletContactHandler}
                />)}
            </div>
        </div>
    )

    function DeleteContact (props){
        return(
            <span key={props.contactId}><button onClick={()=>props.deletContactHandler(props.contactId)}>☓</button>{props.name}</span>
        )
    }
}

function Profile () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function profileOC (event) {
        setCvUserInfo(prevInfo =>{return{...prevInfo, profile: event.target.value}})
    }
    return(
        <div className="cvm-editor-options">
            <div className="cvm-option-cap">
                <h2>Profile</h2>
                <p>type you'r summary of you'r profile</p>
            </div>
            <div className="cvm-LaTeA-container">
                <label name="profile" style={{marginTop: '5px', marginLeft: '5px'}}>Profile :</label>
                <textarea name="profile" cols={70} rows={20} onChange={profileOC}></textarea>
            </div>

            </div>
    )
}

function SoftSkills () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function softSkillsOC (event) {
        setCvUserInfo(prevInfo =>{return{...prevInfo, softSkills: event.target.value}})
    }
    return(
        <div className="cvm-editor-options">
            <div className="cvm-option-cap">
                <h2>Soft Skills</h2>
                <p>type aboutS you'r soft skills</p>
            </div>
            <div className="cvm-LaTeA-container">
                <label name="softSkills" style={{marginTop: '5px', marginLeft: '5px'}}>Soft Skills :</label>
                <textarea name="softSkills" cols={70} rows={20} onChange={softSkillsOC}></textarea>
            </div>
        </div>
    )
}

function Education () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function addEducationHandler(){
        var eTitleInput = document.getElementById('eTitleInput').value;
        var eInstitutionInput = document.getElementById('eInstitutionInput').value;
        var eLocationInput = document.getElementById('eLocationInput').value;
        var eStartInput = document.getElementById('eStartInput').value;
        var eEndInput = document.getElementById('eEndInput').value;
        var eNotEndInput = document.getElementById('eNotEndInput').checked;
        setCvUserInfo(prevInfo =>{return{...prevInfo, education: [...prevInfo.education, {id: nanoid(), title: eTitleInput, institution: eInstitutionInput, location: eLocationInput, start: eStartInput, end: eEndInput, notend: eNotEndInput}]}})
        console.log(cvUserInfo.educatian);
    }
    function deletEducationHandler (educationId) {
        setCvUserInfo(prevInfo =>{return {...prevInfo, education: prevInfo.education.filter (education => education.id !== educationId)}})
    }
    return(
        <div className="cvm-editor-options">
            <div className="cvm-options-cap">
                <h2>Education</h2>
                <p>type you'r education title, institution, location, start date, end date and you can add your education.</p>
                <p>if you want to add education that is not ended, check the not end box.</p>
            </div>
            <div className="cvm-LaIn-container">
                <label name="eTitleInput">Title : </label>
                <input name="eTitleInput" id="eTitleInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="eInstitutionInput">Institutoin</label>
                <input name="eInstitutionInput" id="eInstitutionInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="eLocationInput">Location</label>
                <input name="eLocationInput" id="eLocationInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="eStartInput">Start : </label>
                <input name="eStartInput" id="eStartInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="eEndInput">End : </label>
                <input name="eEndInput" id="eEndInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="eNotEndInput">NotEnd : </label>
                <input type="checkBox" name="eNotEndInput" id="eNotEndInput" />
            </div>
            <div className="cvm-addBtn-container">
                <button onClick={addEducationHandler}>Add</button>
            </div>
            <div className="cvm-units-container">
            {cvUserInfo.education.map(e=><DeleteEducation
                    key={e.id}
                    educationId={e.id}
                    name={e.title}
                    deletEducationHandler={deletEducationHandler}
                />)}
            </div>
        </div>
    )
    function DeleteEducation (props){
        return(
            <span key={props.educationId}><button onClick={()=>props.deletEducationHandler(props.educationId)}>☓</button>{props.name}</span>
        )
    }

}

function Certifications () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function addCertificateHandler(){
        var sTitleInput = document.getElementById('sTitleInput').value;
        var sInstitutionInput = document.getElementById('sInstitutionInput').value;
        var sLocationInput = document.getElementById('sLocationInput').value;
        var sDateInput = document.getElementById('sDateInput').value;
        setCvUserInfo(prevInfo =>{return{...prevInfo, certificate: [...prevInfo.certificate, {id: nanoid(), title: sTitleInput, institution: sInstitutionInput, location: sLocationInput, date: sDateInput}]}})
    }
    function deletCertificationHandler (certificationId) {
        setCvUserInfo(prevInfo =>{return {...prevInfo, certificate: prevInfo.certificate.filter (certificate => certificate.id !== certificationId)}})
    }
    return(
        <div className="cvm-editor-options">
            <div className="cvm-options-cap">
                <h2>Certifications</h2>
                <p>type you'r certifications title, institution, location and date.</p>
            </div>
            <div className="cvm-LaIn-container">
                <label name="sTitleInput">Title : </label>
                <input name="sTitleInput" id="sTitleInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="sInstitutionInput">Institutoin</label>
                <input name="sInstitutionInput" id="sInstitutionInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="sLocationInput">Location</label>
                <input name="sLocationInput" id="sLocationInput" />
            </div>
            <div className="cvm-LaIn-container">
                <label name="sDateInput">Date : </label>
                <input name="sDateInput" id="sDateInput" />
            </div>
            <div className="cvm-addBtn-container">
                <button onClick={addCertificateHandler}>Add</button>
            </div>
            <div className="cvm-units-container">
            {cvUserInfo.certificate.map(c=><DeleteCertification
                    key={c.id}
                    certificationId={c.id}
                    name={c.title}
                    deletCertificationHandler={deletCertificationHandler}
                />)}
            </div>
        </div>
    )
    function DeleteCertification (props){
        return(
            <span key={props.certificationId}><button onClick={()=>props.deletCertificationHandler(props.certificationId)}>☓</button>{props.name}</span>
        )
    }
}