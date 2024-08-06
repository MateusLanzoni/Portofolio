import React from 'react'
import './intro.css'
import bg from '../../assets/PerfilMateus.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">I'm <span className='introName'>Mateus</span> <br/>Systems Engineer</span>
        <p className="introPara">I'm a Systems Engineer with a passion for software development and technology.<br/> Looking for new challenges and opportunities to learn and grow.</p>
        <Link> <button className="btn"> <img src={btnImg} alt="Hire" className='btnImg'/>Hire me</button> </Link>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  )
}

export default Intro;