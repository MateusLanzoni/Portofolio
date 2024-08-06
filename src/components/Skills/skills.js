import React from 'react'
import './skills.css'
import codeScrpting from '../../assets/code-Scripting.png'
import dataBase from '../../assets/DataBase-Management.png'
import webDev from '../../assets/Web-Development.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I have developt skills during my time at EIA University and woriking throught some diferent jobs, that allow me to woek better in the following areas</span>
            <div className='skillBar'>
                <div className='skillBox'>
                    <img src={codeScrpting} alt="CodeScripting" className='skillImg'/>
                    <div className='skillBarText'> 
                        <h2>Code Scripting</h2>
                        <p>I am very versed in working with diferent coding lenguajes, and very capble of doing diferent backend aplications.</p>
                    </div>
                </div>
                <div className='skillBox'>
                    <img src={dataBase} alt="DataBase" className='skillImg'/>
                    <div className='skillBarText'>
                        <h2>Data Base Management</h2>
                         <p>One of my specialities is working with data base operations, I have worked in diferent aplicacions and can demonstrate my knolege in the topic.</p>
                    </div>
                </div>
                <div className='skillBox'>
                    <img src={webDev} alt="WebDevelopment" className='skillImg'/>
                    <div className='skillBarText'>
                        <h2>Web Development</h2>
                        <p>I can and have worked with web development for a long time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills