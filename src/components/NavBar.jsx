
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
    <header className="">
        <div className="hidden lg:flex bg-[#132450] w-60 h-full flex-col justify-between items-between  pt-11 pb-5 pl-6 ">
            <button class="absolute top-[12px] left-[193px] cursor-pointer"><img src={close} alt="chevrnos-left" /></button>
            <nav className="text-white " >
                <img className="mb-12" src={logo} alt="Logo" />
                <ul className="flex flex-col gap-8" >
                    <li>
                        <NavLink className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-tl-xl rounded-bl-xl transition-colors ${
                            isActive ? "bg-white text-[#132450]" : "text-white"
                            }`
                        } to="/spellCheck">
                            <img src={check} alt="Check" />
                        <span>მართლმწერი </span> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/compare-Text"
                           className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-tl-xl rounded-bl-xl transition-colors ${
                                isActive ? "bg-white text-[#132450]" : "text-white"
                                }`
                            }
                        >
                            <img src={spellCheck} alt="Spelling, Check, Text" />
                            <span>ტექსტის შედარება</span>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-tl-xl rounded-bl-xl transition-colors ${
                                    isActive ? "bg-white text-[#132450]" : "text-white"
                                    }`
                                } to="/voice-to-text">
                            <img src={mic}  alt="mic" />
                            <span className="flex items-center gap-2 " > ხმა 
                                <img src={arrowRight} alt="arrow right" />
                                ტექსტი
                            </span> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-tl-xl rounded-bl-xl transition-colors ${
                                    isActive ? "bg-white text-[#132450]" : "text-white"
                                    }`
                                } to="/text-to-voice">
                            <img src={alignCenter} alt="Align Center" />
                            <span className="flex items-center gap-2 " >
                                ტექსტი
                                <img src={arrowRight} alt="arrow right" />
                                ხმა
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-tl-xl rounded-bl-xl transition-colors ${
                                isActive ? "bg-white text-[#132450]" : "text-white"
                                }`
                            } to="/to-PDF">
                            <img src={pdfconv} alt="programming code document" />
                            <span>PDF კონვერტაცია</span> 
                        </NavLink>
                    </li>
                </ul>

            
            </nav>
            <div className="flex justify-between pr-6 text-white ">
                <div className="flex gap-3">
                    <img src={userImg} alt="user Img" />
                    <span>თამარ ონიანი</span>
                </div>
                <div>...</div>
            </div>

        </div>
        <div className="lg:hidden bg-[#132450] w-full flex justify-between items-center py-3 px-5">
             <img className="logo" src={logo} alt="Logo" />
            <div className="burger-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="lg:hidden flex px-5 py-4 border-b-2 border-b-red">
            <img src={spellCheck} alt="Spelling, Check, Text" />
            <span className="text-[#132450]">ტექსტის შედარება</span>
            <img src={arrowDown} alt="arrow down" />
        </div>
        
    </header>
  )
}

export default NavBar
