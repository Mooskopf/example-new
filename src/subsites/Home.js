import { Link } from "react-router-dom"
import ProgressiveImage from "react-progressive-image-loading";
import LazyLoad from 'react-lazyload';
import { useTranslation, Trans, withTranslation } from 'react-i18next'
import Swipe from 'react-easy-swipe';


import Vid from "../Media/video.png"
import Product1 from "../Media/product1.jpg"
import Product2 from "../Media/product2.jpeg"
import Hand from "../Media/hand.png"
import Handger from "../Media/handger.png"
import Handsmall from "../Media/handsmall.png"
import Handsmallger from "../Media/handsmallger.png"
import Invprev from "../Media/invesprev.png"

function Home() {

    var x = 0
    var y = 0

    const { i18n } = useTranslation()

    function oneClick() {
        const contain = document.querySelector('.gridContainer')
        contain.style.transition = 'transform 0.5s ease-in-out'
        const circleOne = document.getElementById("circleOne")
        const circleTwo = document.getElementById("circleTwo")
        const circleThree = document.getElementById("circleThree")

        contain.style.transform = 'translateX(0%)'

        circleOne.style.backgroundColor = "grey"
        circleTwo.style.backgroundColor = "white"
        circleThree.style.backgroundColor = "white"
    }
    function twoClick() {
        const contain = document.querySelector('.gridContainer')
        contain.style.transition = 'transform 0.5s ease-in-out'
        const circleOne = document.getElementById("circleOne")
        const circleTwo = document.getElementById("circleTwo")
        const circleThree = document.getElementById("circleThree")
        var win = window.matchMedia("(max-width: 612px)")
        if (win.matches) {
            contain.style.transform = 'translateX(-100%)'
        } else {
            contain.style.transform = 'translateX(-50%)'
        }
        circleOne.style.backgroundColor = "white"
        circleTwo.style.backgroundColor = "grey"
        circleThree.style.backgroundColor = "white"
    }
    function threeClick() {
        const contain = document.querySelector('.gridContainer')
        contain.style.transition = 'transform 0.5s ease-in-out'
        const circleOne = document.getElementById("circleOne")
        const circleTwo = document.getElementById("circleTwo")
        const circleThree = document.getElementById("circleThree")
        if (contain.style.transform === 'translateX(0%)') {
            contain.style.transition = 'transform 1s ease-in-out'
        }
        contain.style.transform = 'translateX(-200%)'
        circleOne.style.backgroundColor = "white"
        circleTwo.style.backgroundColor = "white"
        circleThree.style.backgroundColor = "grey"
    }

    //reset x and y values
    function swipeStart() {
        x = 0
        y = 0
    }

    //as long as swipe is moving set x and y values
    function swipeMove(position) {
        x = x + position.x
        y = y + position.y
    }

    function swipeEnd() {
        const circleOne = document.getElementById("circleOne")
        const circleTwo = document.getElementById("circleTwo")
        const circleThree = document.getElementById("circleThree")
        const contain = document.querySelector('.gridContainer')
        contain.style.transition = 'transform 0.5s ease-in-out'
        const win = window.matchMedia("(max-width: 612px)")

        const echoX = x < 0 ? x * (-1) : x
        const echoY = y < 0 ? y * (-1) : y

        if (echoX > echoY) {  //only change pictures if its a clear left or right swipe
            if (x < 0) {
                //swipe right
                if (win.matches) {
                    if (contain.style.transform === 'translateX(0%)') {
                        contain.style.transform = 'translateX(-100%)'
                        circleOne.style.backgroundColor = "white"
                        circleTwo.style.backgroundColor = "grey"
                    } else {
                        contain.style.transform = 'translateX(-200%)'
                        circleTwo.style.backgroundColor = "white"
                        circleThree.style.backgroundColor = "grey"
                    }
                } else {
                    contain.style.transform = 'translateX(-50%)'
                    circleOne.style.backgroundColor = "white"
                    circleTwo.style.backgroundColor = "grey"
                }
            } else {
                //swipe left
                if (win.matches) {
                    if (contain.style.transform === 'translateX(-200%)') {
                        contain.style.transform = 'translateX(-100%)'
                        circleTwo.style.backgroundColor = "grey"
                        circleThree.style.backgroundColor = "white"
                    } else {
                        contain.style.transform = 'translateX(0%)'
                        circleOne.style.backgroundColor = "grey"
                        circleTwo.style.backgroundColor = "white"
                    }
                } else {
                    contain.style.transform = 'translateX(0%)'
                    circleOne.style.backgroundColor = "grey"
                    circleTwo.style.backgroundColor = "white"
                }
            }
        }
    }

    return (
        <div className="main">
            <div className="container">
                <div className="headpic">
                    <ProgressiveImage
                        preview={i18n.language === "en" ? Handsmall : Handsmallger}
                        src={i18n.language === "en" ? Hand : Handger}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={i18n.language === "en" ? Hand : Handger} style={style} alt="hand" />} />
                </div>
            </div>
            <div>
                <div className="aboutUs">
                    <h1><Trans i18nKey="Home.Ab"></Trans></h1>
                    <div className="text">
                        <Trans i18nKey="Home.Abtext"></Trans>
                    </div>
                    <br></br>
                    <a href="company"><button type="button"><Trans i18nKey="Home.Bu"></Trans></button></a>
                </div>
                <LazyLoad>
                    <div className="vidContainer">
                        <img src={Vid} alt="vid"></img>
                    </div>
                </LazyLoad>
            </div>
            <div className="third">
                <LazyLoad>
                    <div className="overflowSlide">
                        <Swipe className="gridContainer"
                            onSwipeStart={swipeStart} onSwipeMove={swipeMove} onSwipeEnd={swipeEnd}>
                            <Link to="products#bgid" className="square" id="one">
                                <div className="imgContainer">
                                    <img src={Product1} alt="Battery"></img>
                                </div>
                                <div className="text" id="textsquare">
                                    <h3><Trans i18nKey="Home.Ba"></Trans></h3>
                                    <div className="linkText">
                                        <Trans i18nKey="Home.Batext"></Trans>
                                    </div>
                                    <div className="info"><Trans i18nKey="Home.Info"></Trans> &#8594;</div>
                                    <br></br><br></br>
                                </div>
                            </Link>
                            <Link to="products#generator" className="square" id="two">
                                <div className="imgContainer2">
                                    <img src={Product2} alt="Generator2"></img>
                                </div>
                                <div className="text" id="textsquare">
                                    <h3><Trans i18nKey="Home.Ge"></Trans></h3>
                                    <div className="linkText">
                                        <Trans i18nKey="Home.Getext"></Trans>
                                    </div>
                                    <div className="info"><Trans i18nKey="Home.Info"></Trans> &#8594; </div>
                                    <br></br><br></br>
                                </div>
                            </Link>

                            <Link to="investors" className="square" id="three">
                                <div className="imgContainer3">
                                    <img src={Invprev} alt="Chart"></img>
                                </div>
                                <div className="text" id="textsquare">
                                    <h3><Trans i18nKey="Home.Inv"></Trans></h3>
                                    <div className="linkText">
                                        <Trans i18nKey="Home.Invtext"></Trans>
                                    </div>
                                    <div className="info"><Trans i18nKey="Home.Info"></Trans> &#8594;</div>
                                    <br></br><br></br>
                                </div>
                            </Link>
                        </Swipe>
                    </div>
                </LazyLoad>

                <div className="circleContainer">
                    <div className="circle" id="circleOne" onClick={oneClick}></div>
                    <div className="circle" id="circleTwo" onClick={twoClick}></div>
                    <div className="circle" id="circleThree" onClick={threeClick}></div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Home)