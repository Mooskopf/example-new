import ProgressiveImage from "react-progressive-image-loading";
import i18n from 'i18next';
import { Trans, withTranslation } from 'react-i18next'

import Chart from "../Media/chart.png"
import Chartger from "../Media/chartger.png"
import Chartsmall from "../Media/chartsmall.png"
import Chartsmallger from "../Media/chartsmallger.png"
import { useState } from "react";


function Investors() {

    const [formActive, setFormActive] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()

        const password = document.getElementById("password").value
        const output = document.getElementById("output")

        if (password === "greenearth") {
            setFormActive(false)
        } else {
            if (i18n.language === "en") {
                output.innerHTML = "Wrong Password"
            } else {
                output.innerHTML = "Falsches Passwort"
            }
        }

    }

    return (
        <div className="investors">
            <div className="container">
                <div className="headpic">
                    <ProgressiveImage
                        preview={i18n.language === "en" ? Chartsmall : Chartsmallger}
                        src={i18n.language === "en" ? Chart : Chartger}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={src} style={style} alt="chart" />} />
                </div>
            </div>
            {formActive ?
                <form id="login-form" onSubmit={handleSubmit.bind(this)}>
                    <ul className="passwordList">
                        <li><h2><Trans i18nKey="Inve.He"></Trans></h2></li>
                        <li><input className="inText" type="password" id="password"
                            required placeholder={i18n.language === "en" ? "Password" : "Passwort"}></input></li>
                        <li><button type="submit"><Trans i18nKey="Inve.Su"></Trans></button></li>
                        <li><div id="output"></div></li>
                    </ul>
                </form> : <></>
            }
            {!formActive ?
                <div id="download">
                    <h2><Trans i18nKey="Inve.Hi"></Trans></h2>
                    <div className="text">
                        <Trans i18nKey="Inve.Text"></Trans>
                    </div>
                    <br></br>
                    <a href="../dummy.pdf" download>
                        <button type="button"><Trans i18nKey="Inve.Dl"></Trans></button>
                    </a>
                </div> : <></>
            }
        </div>
    )
}

export default withTranslation()(Investors)