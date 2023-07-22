import React from 'react'
import { NavbarMemento } from '../components/navbar/NavbarMemento'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../modules/memento/home/Home'
import { Projects } from '../modules/memento//projects/Projects'
import { Contacts } from '../modules/memento//contacts/Contacts'
import { AboutMe } from '../modules/memento/aboutMe/AboutMe'
import './mementoRoutesStyles.css'


export const MementoRoutes = () => {
    return (
        <div className='containerMain'>
            <NavbarMemento />
            {/* <Sidebar /> */}
            <div className='main'>
                <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='aboutMe' element={<AboutMe />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='/' element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </div>
    )
}
