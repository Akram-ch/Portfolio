import React from "react"


export default function Navbar(props){
    return(
        <nav className="navbar">
            <h1 className="logo">AKRAM CHAOUACHE</h1>
            <ul className="nav-links">
                <li><a className="about" href="#">About me</a></li>
                <li><a className="projects" href="#">my projects</a></li>
                <li ><a  className="contact-box" href="#">contact</a></li>
                <img src="/images/github.png"></img>
                <img src="/images/linkedin.png"></img>
            </ul>
        </nav>
    )
}