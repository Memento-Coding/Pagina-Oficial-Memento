import React from 'react'
import { NavLink } from "react-router-dom"
import { MdOutlineDashboard } from 'react-icons/md'
import { BiHomeAlt2 } from 'react-icons/bi'
import * as FaIcons from "react-icons/fa"
import './sidebarStyles.css'

export const Sidebar = () => {
    return (
        <div className="siderbar">
            <ul>
                <li>
                    <NavLink to="/projects" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont " ><BiHomeAlt2 className="me-3" /> Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutMe" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont" ><MdOutlineDashboard className="me-3" /> About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont" ><FaIcons.FaHandsHelping className="me-3" /> Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}
