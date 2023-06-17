import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {nanoid} from "nanoid"
import style from "../cv-maker.css";
import { CvInfoPro } from "../CvMaker";
import Cv from "./cv";


export default function CvMakerHome (props){
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    const [currentEditorr, setCurrentEditorr] = React.useState(<BasicInfo/>)

    return(
        <main className="cv-maker-home-main" >
            <header className="cv-maker-home-header">
                <h3>header</h3>
                <h4>Aboute</h4>
            </header>
                <h3>cv-maker-container</h3>
                <p>inter your information and build your CV</p>
            <div className="cv-maker-container">
                <div className="cv-maker-editor-container">
                    <div className="cv-maker-editor-navigation">
                        <div className="cv-maker-editor-navigation-header">
                            <button
                                id="cv-maker-editor-navigationbar-user-btn"
                                style={{borderBottom : 'solid 2px black'}}
                                onClick={()=>{document.getElementById('cv-maker-editor-navigation-user-info').style.display = 'block'
                                document.getElementById('cv-maker-editor-navigation-cv-info').style.display = 'none'
                                document.getElementById('cv-maker-editor-navigationbar-user-btn').style.borderBottom = 'solid 2px black'
                                document.getElementById('cv-maker-editor-navigationbar-cv-btn').style.borderBottom = 'none'
                            }}>Prsonal Info</button>
                            <button
                            id="cv-maker-editor-navigationbar-cv-btn"
                               onClick={()=>{document.getElementById('cv-maker-editor-navigation-user-info').style.display = 'none'
                               document.getElementById('cv-maker-editor-navigation-cv-info').style.display = 'block'
                               document.getElementById('cv-maker-editor-navigationbar-user-btn').style.borderBottom = 'none'
                               document.getElementById('cv-maker-editor-navigationbar-cv-btn').style.borderBottom = 'solid 2px black'
                            }}>Cv Info</button>
                        </div>
                        <div className="cv-maker-editor-navigations">
                            <div className="cv-maker-editor-navigation-user-info" id="cv-maker-editor-navigation-user-info" style={{display: 'block'}}>
                                <div><button onClick={()=>{setCurrentEditorr(<BasicInfo/>)}}>Basic info</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<Skills/>)}}>skills</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<Contact/>)}}>Contact</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<Profile/>)}}>Profile</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<SoftSkills/>)}}>soft skills</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<Educatian/>)}}>Educatian</button></div>
                                <div><button onClick={()=>{setCurrentEditorr(<Certifications/>)}}>Certificate</button></div>
                            </div>
                            <div className="cv-maker-editor-navigation-cv-info" id="cv-maker-editor-navigation-cv-info" style={{display: 'none'}}>
                                <div><button>e</button></div>
                                <div><button>f</button></div>
                                <div><button>g</button></div>
                                <div><button>h</button></div>
                                <div><button>i</button></div>
                                <div><button>j</button></div>
                            </div>
                        </div>
                        <div className="cv-maker-editor-navigation-footer">
                            <Link to="Cv"><button>Save CV</button></Link>
                        </div>
                    </div>
                    <div className="cv-maker-editor-options">
                        <div>{currentEditorr}</div>
                    </div>
                </div>

                <div className="single-info-editor-container">
                    
                </div>
            </div>
            <div className="cv-container-home">
                <Cv/>
            </div>
            <footer className="cv-maker-home-footer">
                <h3 >footer</h3>
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
        
        <div className="single-info-editor-container">
                    <label name="fullName">Full Name: </label>
                    <input name="fullName" type="text" className="cvm-txt-input" placeholder="full name" onChange={fullNameOC}/>
                
                    <label name="profession">profession: </label>
                    <input name="profession" type="text" className="cvm-txt-input" placeholder="profession" onChange={professionOC}/>
                
                    <label name="userPicture">userPicture: </label>
                    <input name="userPicture" type="file" accept="image/jpeg, image/png, image/jpg" className="cvm-img-input" onChange={userPictureOC}/>
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
        <div className="single-info-editor-container">
                    <label name="skill">skill Name:</label>
                    <input name="skill" type="text" className="cvm-txt-input" id="cvmSkillInput" placeholder="skill"/>
                    <label name="skill-point">skill Point:</label>
                    <input name="skill-point" type="text" className="cvm-number-input" id="cvmSkillPointInput" placeholder="1 to 5" />
                    <button onClick={addSkillHandler}>add</button>

                    {cvUserInfo.skills.map(s=><DeleteSkill
                        key={s.id}
                        skillId={s.id}
                        name={s.skillName}
                        deletSkillHandler={deletSkillHandler}
                    />)}
                </div> 
    )

    function DeleteSkill (props){
        return(
            <span key={props.skillId}>{props.name}<button onClick={()=>props.deletSkillHandler(props.skillId)}>*</button></span>
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
    // function checkBoxHandler(event){
    //     if(event.target.checked === true) {
    //         document.getElementById (`edit${event.target.name}`).style.display = 'block'
    //     } else {
    //         document.getElementById (`edit${event.target.name}`).style.display = 'none'
    //     };
    //     // setCvUserInfo(prevInfo =>{ return{...prevInfo, contact: [
    //     // {id: nanoid(), active: true, contactName: 'Adress', contactLink: 'Hamadan, Iran'},
    //     // {id: nanoid(), active: true, contactName: 'Email', contactLink: 'parsa.rahmanian8@gmail.com'},
    //     // {id: nanoid(), active: true, contactName: 'WhatsApp', contactLink: '+98 9185913409'},
    //     // {id: nanoid(), active: true, contactName: 'Github', contactLink: 'parsa-rh'},
    //     // {id: nanoid(), active: false, contactName: 'Linkedin', contactLink: 'parsa-rh'},
    //     // {id: nanoid(), active: false, contactName: 'Twitter', contactLink: ''},
    //     // {id: nanoid(), active: false, contactName: 'Facebook', contactLink:''},
    //     // {id: nanoid(), active: true, contactName: 'Instagram', contactLink:'parsa__rh'}]}})

    //     console.log(cvUserInfo.contact.filter(a=> a.contactName === event.target.name))

    //      setCvUserInfo(prevInfo => {return{...prevInfo, contact : [...prevInfo.contact, [prevInfo.contact.filter(a => a.contactName === 'Adress').active = true]]}})
    //     console.log(cvUserInfo.contact)
    //      function an (a){if(a.contactName == event.target.name)return a }
    // }
    return(
        <div className="single-info-editor-container">
                <label name="contact">contact Name:</label>
                <input name="contact" type="text" className="cvm-txt-input" id="cvmContactInput" placeholder="contact"/>
                <label name="contact-point">contact Point:</label>
                <input name="contact-point" type="text" className="cvm-number-input" id="cvmContactPointInput" placeholder="link" />
                <button onClick={addContactHandler}>add</button>

                {cvUserInfo.contact.map(c=><DeleteContact
                    key={c.id}
                    contactId={c.id}
                    name={c.contactName}
                    deletContactHandler={deletContactHandler}
                />)}
        </div>
        // <div className="single-info-editor-container">
        //     <input type="checkbox" name="Adress" onClick={checkBoxHandler}/>
        //     <div id="editAdress" style={{display : 'none'}}>
        //         <input></input>
        //     </div>
        // </div>
    )

    function DeleteContact (props){
        return(
            <span key={props.contactId}>{props.name}<button onClick={()=>props.deletContactHandler(props.contactId)}>*</button></span>
        )
    }
}

function Profile () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function profileOC (event) {
        setCvUserInfo(prevInfo =>{return{...prevInfo, profile: event.target.value}})
    }
    return(
        <div className="single-info-editor-container">
            <label name="profile" style={{marginTop: '5px', marginLeft: '5px'}}>profile :</label>
            <textarea name="profile" cols={70} rows={20} onChange={profileOC}></textarea>
        </div>
    )
}

function SoftSkills () {
    const {cvUiState, setCvUiState, cvUserInfo, setCvUserInfo} = React.useContext(CvInfoPro)
    function softSkillsOC (event) {
        setCvUserInfo(prevInfo =>{return{...prevInfo, softSkills: event.target.value}})
    }
    return(
        <div className="single-info-editor-container">
            <label name="softSkills" style={{marginTop: '5px', marginLeft: '5px'}}>soft Skills :</label>
            <textarea name="softSkills" cols={70} rows={20} onChange={softSkillsOC}></textarea>
        </div>
    )
}

function Educatian () {
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
    return(
        <div className="single-info-editor-container">
            <label name="eTitleInput">Title : </label>
            <input name="eTitleInput" id="eTitleInput" />
            <label name="eInstitutionInput">Institutoin</label>
            <input name="eInstitutionInput" id="eInstitutionInput" />
            <label name="eLocationInput">Location</label>
            <input name="eLocationInput" id="eLocationInput" />
            <label name="eStartInput">Start : </label>
            <input name="eStartInput" id="eStartInput" />
            <label name="eEndInput">End : </label>
            <input name="eEndInput" id="eEndInput" />
            <label name="eNotEndInput">NotEnd : </label>
            <input type="checkBox" name="eNotEndInput" id="eNotEndInput" />
            <button onClick={addEducationHandler}>Add</button>
        </div>
    )
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
    return(
        <div className="single-info-editor-container">
            <label name="sTitleInput">Title : </label>
            <input name="sTitleInput" id="sTitleInput" />
            <label name="sInstitutionInput">Institutoin</label>
            <input name="sInstitutionInput" id="sInstitutionInput" />
            <label name="sLocationInput">Location</label>
            <input name="sLocationInput" id="sLocationInput" />
            <label name="sDateInput">Date : </label>
            <input name="sDateInput" id="sDateInput" />
            <button onClick={addCertificateHandler}>Add</button>
        </div>
    )
}