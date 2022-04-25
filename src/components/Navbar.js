import { useState, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import LangSelector from "./LangSelector"
import { Trans, withTranslation } from 'react-i18next'

import Logo from "../Media/logo.png"


function Navbar() {

    const [navActive, setNavActive] = useState(false)
    const [size, setSize] = useState([0])

    //Shows the navigation bar on mobile with animation
    function showNav() {

        setNavActive(prev => !prev);

        const navLinks = document.querySelectorAll('.nav-links li')


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    }

    function useWindowSize() {
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth])
            }
            window.addEventListener('resize', updateSize)
            updateSize();
            return () => window.removeEventListener('resize', updateSize)
        }, [])
        return size
    }

    useWindowSize()

    return (
        <nav>
            <Link to="/"><img src={Logo} alt="Logo"></img></Link>
            <ul className="nav-links" style={size <= 1048 ? navActive ? { transform: "translateX(0%)" } : { transform: "translateX(100%)" } : {}}>
                <li><Link to="/"><font style={window.location.pathname === "/" ? { color: "green" } : { color: "grey" }}>Home</font></Link></li>
                <li><Link to="/company"><font style={window.location.pathname === "/company" ? { color: "green" } : { color: "grey" }}>
                    <Trans i18nKey="Nav.Co"></Trans></font></Link></li>
                <li><Link to="/products"><font style={window.location.pathname === "/products" ? { color: "green" } : { color: "grey" }}>
                    <Trans i18nKey="Nav.Pr"></Trans></font></Link></li>
                <li><Link to="/investors"><font style={window.location.pathname === "/investors" ? { color: "green" } : { color: "grey" }}>
                    <Trans i18nKey="Nav.Inv"></Trans></font></Link></li>
                <li><Link to="/contact"><font style={window.location.pathname === "/contact" ? { color: "green" } : { color: "grey" }}>
                    <Trans i18nKey="Nav.Con"></Trans></font></Link></li>
            </ul>
            <LangSelector />
            <div className="mobile-nav" style={navActive ? { backgroundColor: "lightgrey" } : { backgroundColor: "white" }} onClick={showNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}


export default withTranslation()(Navbar)