
import { NavLink } from "react-router-dom"

import logo from "../assets/Logo/logo.png"
import check from "../assets/icons/check.png"
import spellCheck from "../assets/icons/Spelling, Check, Text.png"
import mic from "../assets/icons/mic.png"
import pdfconv from "../assets/icons/programming-code-document.png"
import alignCenter from "../assets/icons/align-center.png"
import arrowRight from "../assets/icons/arrow-right.png"
import userImg from "../assets/icons/User Images.png"
import close from "../assets/icons/chevrons-left.png"
import arrowDown from "../assets/icons/Group.png"


function NavBar() {



  return (
    <header>
        <div className="headerContainter">
            <button className="btnclose" ><img src={close} alt="chevrnos-left" /></button>
            <nav>
                <img className="logo" src={logo} alt="Logo" />
                <ul>
                    <li>
                        <NavLink className="nav-NavLink" to="/spellCheck">
                            <img src={check} alt="Check" />
                        <span>მართლმწერი </span> 
                        </NavLink>
                    </li>
                        <li>
                        <NavLink
                            to="/compare-Text"
                            className={({ isActive }) =>
                            `nav-NavLink ${isActive ? "active" : ""}`
                            }
                        >
                            <img src={spellCheck} alt="Spelling, Check, Text" />
                            <span>ტექსტის შედარება</span>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink className="nav-NavLink" to="/voice-to-text">
                            <img src={mic}  alt="mic" />
                            <span> ხმა 
                                <img src={arrowRight} alt="arrow right" />
                                ტექსტი
                            </span> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-NavLink" to="/text-to-voice">
                            <img src={alignCenter} alt="Align Center" />
                            <span>
                                ტექსტი
                                <img src={arrowRight} alt="arrow right" />
                                ხმა
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-NavLink" to="/to-PDF">
                            <img src={pdfconv} alt="programming code document" />
                            <span>PDF კონვერტაცია</span> 
                        </NavLink>
                    </li>
                </ul>

            
            </nav>
            <div className="user">
                <div>
                <img src={userImg} alt="user Img" />
                <span>თამარ ონიანი</span>
                </div>
                <div>...</div>
            </div>

        </div>
        <div className="headerContainter2">
             <img className="logo" src={logo} alt="Logo" />
            <div className="burger-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="actPage">
            <img src={spellCheck} alt="Spelling, Check, Text" />
            <span>ტექსტის შედარება</span>
            <img src={arrowDown} alt="arrow down" />
        </div>
        
    </header>
  )
}

export default NavBar
