//import axios from 'axios';
import ProgressiveImage from "react-progressive-image-loading";
import { Trans, withTranslation } from 'react-i18next'
import i18n from 'i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Mail from "../Media/contact.jpg"
import Mailger from "../Media/contactger.png"
import Mailsmall from "../Media/contactsmall.png"
import Mailsmallger from "../Media/contactsmallger.png"

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();

        // const fullname = document.getElementById("name").value
        // const subjectMail = document.getElementById("subject").value
        // const text = document.getElementsByTagName('textarea')[0].value
        const mail = document.getElementById("mail").value
        const output = document.getElementById("output")
        const checkBox = document.getElementById("checkBox")
        const checkMark = document.getElementById("checkCopy")

        if (!mail.includes('.') || !mail.includes('@')) {
            if (i18n.language === "en") {
                output.innerHTML = "Please enter a valid mail adress"
            } else {
                output.innerHTML = "Bitte geben Sie eine valide E-mail Adresse ein"
            }
        } else if (!checkBox.checked) {
            checkMark.style.border = '1px solid red'
            output.innerHTML = ""
        } else {

            document.getElementById("output").style.color = "black"
            document.getElementById("output").innerHTML = "E-mail sent!"

            // axios({
            //     method: "POST", 
            //     url: "/api/send",
            //     baseURL: window.location.protocol + '//' + window.location.host,
            //     data: {
            //         name: fullname,   
            //         email: mail,
            //         subject: subjectMail,  
            //         message: text
            //     }
            // }).then((response)=>{
            //     if (response.data.msg === 'success'){
            //         document.getElementById("contact-form").reset()
            //         document.getElementById("output").innerHTML = "E-mail sent!"
            //         window.setTimeout( closeDiv, 4000 );
            //     }else if(response.data.msg === 'fail'){
            //         if(i18n.language === "en"){
            //             output.innerHTML = "E-mail could not be sent"
            //         } else{
            //             output.innerHTML = "E-mail konnte nicht gesendet werden"
            //         }
            //     }
            // })
        }
    }

    function resetMark() {
        const checkMark = document.getElementById("checkCopy")
        checkMark.style.border = 'initial'
    }
    return (

        <div className="contact">
            <div className="container">
                <div className="headpic">
                    <ProgressiveImage
                        preview={i18n.language === "en" ? Mailsmall : Mailsmallger}
                        src={i18n.language === "en" ? Mail : Mailger}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={i18n.language === "en" ? Mail : Mailger} style={style} alt="mail" />} />
                </div>
            </div>
            <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST">
                <ul className="inputList">
                    <h2><Trans i18nKey="Contact.Cu">Contact us</Trans></h2>
                    <li><input className="inText" type="text" id="name" required placeholder="Name"></input></li>
                    <li><input className="inText" type="text" id="mail" required placeholder="E-Mail"></input></li>
                    <li><input className="inText" type="text" id="subject"
                        required placeholder={i18n.language === "en" ? "Subject" : "Betreff"}></input></li>
                    <li><textarea id="message"
                        required placeholder={i18n.language === "en" ? "Message" : "Nachricht"}></textarea></li>
                    <li className="checkItem">
                        <label className="checkContainer">
                            <Trans i18nKey="Contact.Ch1"></Trans> <Link to="impressum#datenschutz" id="checkLink"><Trans i18nKey="Contact.Ch2"></Trans></Link> <Trans i18nKey="Contact.Ch3"></Trans>
                            <input type="checkbox" id="checkBox" name="legal" />
                            <span onClick={resetMark} className="checkmark" id="checkCopy"></span>
                        </label>
                    </li>
                    <li><button type="submit"><Trans i18nKey="Contact.Se">Send</Trans></button></li>
                    <li><div id="output"></div></li>
                </ul>
            </form>
        </div>
    )
}

export default withTranslation()(Contact)