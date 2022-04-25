import { useState } from "react"
import ProgressiveImage from "react-progressive-image-loading";
import LazyLoad from 'react-lazyload';
import { withTranslation, Trans } from 'react-i18next'
import i18n from 'i18next';

import Glass from "../Media/glass.png"
import GlassGer from "../Media/glassger.png"
import Glasssmall from "../Media/glasssmall.png"
import GlassGersmall from "../Media/glassgersmall.png"
import Product1 from "../Media/product1.jpg"
import Product2 from "../Media/product2.jpeg"
import Vid from "../Media/video.png"


function Products() {

    const [vidActive, setVidActive] = useState(false)

    function vidClick() {
        setVidActive(true)
    }

    function back() {
        setVidActive(false)
    }

    return (
        <div className="products">
            <div className="container">
                <div className="headpic">
                    <ProgressiveImage
                        preview={i18n.language === "en" ? Glasssmall : GlassGersmall}
                        src={i18n.language === "en" ? Glass : GlassGer}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={i18n.language === "en" ? Glass : GlassGer} style={style} alt="glass" />} />
                </div>
            </div>
            {!vidActive ?
                <div id="bgid">
                    <h1><Trans i18nKey="Prod.Op"></Trans></h1>
                    <div className="line" id="vmLine"></div>
                    <LazyLoad>
                        <div className="bg">
                            <div className="bgContainer">
                                <div>
                                    <img src={Product1} alt="Prod1"></img>
                                </div>
                                <div className="text" id="battery">
                                    <h3 className="title"><Trans i18nKey="Home.Ba"></Trans></h3>
                                    <Trans i18nKey="Prod.Btext1"></Trans>
                                    <br></br><br></br>
                                    <Trans i18nKey="Prod.Btext2"></Trans>
                                    <br></br>
                                    <br></br>
                                    <button onClick={vidClick} type="button" id="vidbutton">Video</button>
                                </div>
                            </div>
                            <div className="gContainer">
                                <div className="bgContainer">
                                    <div className="text" id="generator">
                                        <h3 className="title"><Trans i18nKey="Home.Ge"></Trans></h3>
                                        <Trans i18nKey="Prod.Gtext1"></Trans>
                                        <br></br><br></br>
                                        <Trans i18nKey="Prod.Gtext2"></Trans>
                                    </div>
                                    <div id="gPic">
                                        <img src={Product2} alt="Generator"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LazyLoad>
                </div> : <></>}
            {vidActive ?
                <div id="batteryVid">
                    <button type="button" onClick={back}>&laquo; <Trans i18nKey="Prod.Bu"></Trans></button>
                    <img src={Vid} alt="vid"></img>
                </div> : <></>}
        </div>
    )
}

export default withTranslation()(Products)