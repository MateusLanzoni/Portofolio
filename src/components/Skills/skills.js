import React from 'react'
import './skills.css'
import codeScrpting from '../../assets/code-Scripting.png'
import dataBase from '../../assets/DataBase-Management.png'
import webDev from '../../assets/Web-Development.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Through my studies in the EIA University and working in different projects I have developed capacities and knowledge that allow me to work in the following areas</span>
            <div className='skillBar'>
                <div className='skillBox'>
                    <img src={codeScrpting} alt="CodeScripting" className='skillImg'/>
                    <div className='skillBarText'> 
                        <h2>Code Scripting</h2>
                        <p>I am very versed in working with different coding languages, and very capable of doing different backend applications.</p>
                    </div>
                </div>
                <div className='skillBox'>
                    <img src={dataBase} alt="DataBase" className='skillImg'/>
                    <div className='skillBarText'>
                        <h2>Data Base Management</h2>
                         <p>One of my specialities is working with data base operations. I have worked with different applications and can demonstrate my  knowledge in the topic.</p>
                    </div>
                </div>
                <div className='skillBox'>
                    <img src={webDev} alt="WebDevelopment" className='skillImg'/>
                    <div className='skillBarText'>
                        <h2>Web Development</h2>
                        <p>I can and have worked well with web development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills