import React from 'react';
import './home.css';
import { ReactComponent as FbLogo } from "../svg/fb.svg";

export default function Home() {
    return (
        <div className="home">
            <header className="header">
                <div className="display-flex">
                    <div>
                        <img src="/logo.PNG" alt="PM" className="logo" />
                    </div>
                    <div className="nav-title-container">
                        <div className="title">
                            Paresh Maniyar
                        </div>
                        <div className="sub-title">
                            <i>Ignorance is a bliss, is a myth</i>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="display-flex external-links">
                        <a href="https://www.linkedin.com/in/pareshmaniyar/" target="_blank">
                            <img className="contact-logo linkedin" src="/linkedin.png" alt="linkedIn" />
                        </a>
                        <a href="https://github.com/pareshmaniyar" target="_blank">
                            <img className="contact-logo github" src="/github.png" alt="GitHub" />
                        </a>
                        <a href="mailto:pareshmaniyar1@gmail.com?Subject=Hey%20there%20Paresh!" target="_top">
                            <img className="contact-logo gmail" src="/gmail.png" alt="Email" />
                        </a>
                        <a href="https://www.facebook.com/paresh.maniyar.1" target="_blank">
                            <div className="contact-logo fb">
                                <FbLogo/>
                            </div>
                        </a>
                    </div>
                    <div className="display-flex right-nav">
                        <div>Resume</div>
                        <div>Contact</div>
                    </div>
                </div>
            </header>
            <div className="main-image-container">
                <div className="intro-text">
                    Hello, My name is
                    <div>Paresh Maniyar</div>
                    I am a Full Stack Developer based in Hyderabad. I work to make Ideas a Reality.
                </div>
                <div className="main-image">

                </div>
            </div>
            <section className="profile-summary">
                <div className="title">
                    The Curious One. That's what my friends call me!
                </div>
                A 2017 BITS Graduate with 2 years of experience in Full-Stack development in Node(Express), MongoDB, Vue(VueX), React(Redux), CSS preprocessors. I am responsible for building User Loan journey UI and Operations dashboard at CreditVidya.
                I have loved brainstorming ideas from my childhood. I spend the majority of my time learning and building websites, reading and learning about Climate Change, Education system and Computer vision.
                I love playing football and reading biographies and currently reading Creativity, INC by Ed Catmull.
            </section>
        </div>
    )
}
