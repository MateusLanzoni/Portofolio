import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <div className='Busses EIA'> 
                    <h2>Buses EIA</h2>
                    <p>Tracking app developed for students that need to take the university bus but don't know its route.</p>
                    <p>Git Repository: https://github.com/MateusLanzoni/ProyectoII.git</p>
                </div>
                <img src={Portfolio3} alt="" className="worksImg" />
                <div className='UEatss'> 
                    <h2>UEatss</h2>
                    <p>Plataform to mediate time for distributing food at closed quarters like universities o big ofices.</p>
                    <p>Git Repository: https://github.com/MateusLanzoni/Ueats.git</p>
                </div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;