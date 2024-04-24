import React from 'react';

export default function Info() {
    return (
        <section className="info">
            <img className="info__profile-photo" src="../images/headshot.jpeg" alt="portrait photo of Jeff Eng"/>
            <h1 className="info__name">Jeff Eng</h1>
            <h2 className="info__headline">Frontend Developer</h2>
            <a className="info__portfolio-link" href="https://www.jeffeng.com" target="_blank">jeffeng.com</a>
            <div className="info__contact-wrapper">
                <a className="info__button info__email" href="mailto:me@jeffeng.com"><i className=" fa-solid fa-envelope"></i>Email</a>
                <a className="info__button info__linkedin" href="https://www.linkedin.com/in/jeffeng-developer" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </section>  
    );
}