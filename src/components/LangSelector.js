import { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import i18n from 'i18next'

function LangSelector() {

    const [engActive, setEngActive] = useState(false)
    const [arrowActive, setArrowActive] = useState(false)

    useEffect(() => {
        if (i18n.language === "de") {
            setEngActive(false)
        } else {
            setEngActive(true)
        }
    }, [])

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    function showLang() {
        setArrowActive(prev => !prev)
    }

    function changeLang() {

        setArrowActive(false)
        if (i18n.language === "de") {
            changeLanguage('en')
            setEngActive(true)
        } else {
            changeLanguage('de')
            setEngActive(false)
        }

    }

    return (
        <div className="langSel">
            <div onClick={showLang}>
                <span id="lang1">
                    {engActive ?
                        "en"
                        : "de"
                    }
                </span><span className="arrow" style={arrowActive ? { borderTop: "0", borderBottom: "7px solid rgb(56, 175, 255)" } : { borderTop: "7px solid rgb(56, 175, 255)", borderBottom: "0" }}></span>
            </div>
            {arrowActive ?
                <div id="lang2" onClick={changeLang}>
                    {engActive ?
                        "de"
                        : "en"
                    }</div>
                : <></>}
        </div>
    )
}

export default withTranslation()(LangSelector)