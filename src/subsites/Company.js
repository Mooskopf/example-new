import ProgressiveImage from "react-progressive-image-loading";
import LazyLoad from 'react-lazyload';
import { withTranslation, Trans } from 'react-i18next'
import i18n from 'i18next';

import Land from "../Media/company.png"
import Landger from "../Media/companyger.png"
import Landsmall from "../Media/companysmall.png"
import Landsmallger from "../Media/companysmallger.png"
import Vision from "../Media/vision.jpeg"
import Mission from "../Media/mission.jpeg"
import Murray from "../Media/murray.jpg"



function Company() {

    return (
        <div className="company">

            <div className="container">
                <div className="headpic">
                    <ProgressiveImage
                        preview={i18n.language === "en" ? Landsmall : Landsmallger}
                        src={i18n.language === "en" ? Land : Landger}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={i18n.language === "en" ? Land : Landger} style={style} alt="land" />} />
                </div>
            </div>

            <h1><Trans i18nKey="Comp.Vm"></Trans></h1>
            <div className="line" id="vmLine"></div>
            <LazyLoad>
                <div className="vm">
                    <div className="vmContainer">
                        <div>
                            <img src={Vision} alt="Vision"></img>
                        </div>
                        <div className="text" id="vision">
                            <h3>Vision</h3>
                            <Trans i18nKey="Comp.Vtext1"></Trans>
                            <br></br><br></br>
                            <Trans i18nKey="Comp.Vtext2"></Trans>
                            <br></br><br></br>
                            <Trans i18nKey="Comp.Vtext3"></Trans>
                        </div>
                    </div>
                    <div className="vmContainer">
                        <div className="text" id="mission">
                            <h3>Mission</h3>
                            <Trans i18nKey="Comp.Mtext1"></Trans>
                            <br></br><br></br>
                            <Trans i18nKey="Comp.Mtext2"></Trans>
                            <br></br><br></br>
                            <Trans i18nKey="Comp.Mtext3"></Trans>
                        </div>
                        <div id="mPic">
                            <img src={Mission} alt="Mission"></img>
                        </div>
                    </div>
                </div>
            </LazyLoad>

            <LazyLoad>
                <div className="ourTeam">
                    <h1><Trans i18nKey="Comp.Out"></Trans></h1>
                    <div className="line" />
                    <div className="team">
                        <div className="member">
                            <div className="picContainer">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                    <img className="pic" src={Murray} alt="Murray"></img>
                                </a>
                            </div>
                            <br></br><br></br>
                            <div className="memberName">Max Mustermann</div>
                            <div className="title"><Trans i18nKey="Comp.Ph"></Trans></div>
                            <br></br>
                            <div className="text">
                                <Trans i18nKey="Comp.Pt"></Trans>
                            </div>
                        </div>
                        <div className="member">
                            <div className="picContainer">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                    <img className="pic" src={Murray} alt="Murray"></img>
                                </a>
                            </div>
                            <br></br><br></br>
                            <div className="memberName">Max Mustermann</div>
                            <div className="title"><Trans i18nKey="Comp.Nh"></Trans></div>
                            <br></br>
                            <div className="text">
                                <Trans i18nKey="Comp.Nt"></Trans>
                            </div>
                        </div>
                        <div className="member">
                            <div className="picContainer">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                    <img className="pic" src={Murray} alt="Murray"></img>
                                </a>
                            </div>
                            <br></br><br></br>
                            <div className="memberName">Max Mustermann</div>
                            <div className="title"><Trans i18nKey="Comp.Oh"></Trans></div>
                            <br></br>
                            <div className="text">
                                <Trans i18nKey="Comp.Ot"></Trans>
                            </div>
                        </div>
                        <div className="member">
                            <div className="picContainer">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                    <img className="pic" src={Murray} alt="Murray"></img>
                                </a>
                            </div>
                            <br></br><br></br>
                            <div className="memberName">Max Mustermann</div>
                            <div className="title"><Trans i18nKey="Comp.Hh"></Trans></div>
                            <br></br>
                            <div className="text">
                                <Trans i18nKey="Comp.Ht"></Trans>
                            </div>
                        </div>
                        <div className="member">
                            <div className="picContainer">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                    <img className="pic" src={Murray} alt="Murray"></img>
                                </a>
                            </div>
                            <br></br><br></br>
                            <div className="memberName">Max Mustermann</div>
                            <div className="title"><Trans i18nKey="Comp.Nih"></Trans></div>
                            <br></br>
                            <div className="text">
                                <Trans i18nKey="Comp.Nit"></Trans>
                            </div>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        </div>
    )
}

export default withTranslation()(Company)