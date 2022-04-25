import { Link } from "react-router-dom"
import { Trans, withTranslation } from 'react-i18next'

import Logo from "../Media/logo.png"

function Footer() {
    return (
        <div className="wrapper">
            <div className="footer">
                <div className="innerfooter">

                    <div className="logo_footer">
                        <Link to="/"><img alt="Logo" src={Logo}></img></Link>
                    </div>

                    <div className="footer_third">
                        <h1><Trans i18nKey="Footer.Ad"></Trans></h1>
                        <div>Lorem ipsum</div>
                        <div>Lorem ipsum 60</div>
                        <div>7777 Lorem ipsum</div>
                    </div>

                    <div className="footer_third" id="nav">
                        <h1>Navigation</h1>
                        <Link to="/"> Home</Link>
                        <Link to="/company"> <Trans i18nKey="Nav.Co"></Trans></Link>
                        <Link to="/products"> <Trans i18nKey="Nav.Pr"></Trans></Link>
                        <Link to="/investors"> <Trans i18nKey="Nav.Inv"></Trans></Link>
                        <Link to="/contact"> <Trans i18nKey="Nav.Con"></Trans></Link>
                    </div>

                    <div className="footer_third">
                        <h1><Trans i18nKey="Footer.Mo"></Trans></h1>
                        <Link to="/imprint"><Trans i18nKey="Footer.Inf"></Trans></Link>
                        <Link to="/imprint#privacy"><Trans i18nKey="Footer.Le"></Trans></Link>
                    </div>
                </div>
            </div>

            <div className="bar">
                © 2022 Florin Brüske
            </div>
        </div>
    )
}

export default withTranslation()(Footer)