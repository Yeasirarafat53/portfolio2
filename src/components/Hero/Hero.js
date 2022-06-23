import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  

  return (
    <section id="hero">
      <div className="hero-container container">
        <h2>Hello,</h2>
        <h1 className="title">I am Yeasir Arafat</h1>
        <h4
          style={{
            color: 'white',
            fontWeight: 'normal',
          }}
        >
          And I'm {''}
          
          <span
            style={{
              color: 'tomato',
              fontWeight: 'normal',
              // textAlign: 'center',
              // fontSize: '2rem',
            }}
          >
            <Typewriter
              words={['Web Developer', 'Web Designer', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h4>
        <div className="social-links">
          <a
            href="https://www.facebook.com/yeasirarafat53"
            target="/_blank"
            className="facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://github.com/Yeasirarafat53"
            target="/_blank"
            className="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yeasir-arafat-997b791ba/"
            target="/_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCcrcZn3JOeMp2hAifiv5mhA"
            target="/_blank"
            className="youtube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="hero-btn mt-2">
          <a href="img/resume/resume.pdf" type="button" className="btn">
            Resume <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
