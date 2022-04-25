import { useState } from "react"
import { withTranslation, Trans } from 'react-i18next'

function Cookies() {

    const [cookieActive, setCookieActive] = useState(true)

    function removeCookie() {

        setCookieActive(false)

    }

    return (
        <div className="cookiePop" style={cookieActive ? { transform: "translateY(0%)" } : { transform: "translateY(100%)" }}>
            <div className="cookieText"><Trans i18nKey="Cookietext"></Trans></div>
            <button type="button" onClick={removeCookie}> Okay</button>
        </div>
    )
}

export default withTranslation()(Cookies)