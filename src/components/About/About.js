import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="/img/my-img/my-img.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>
                          <span>Yeasir Arafat</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>
                          <span>Mern-stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          <span>yeasirarafat1776@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>
                          <span>(+880) 1600127016</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* skills */}

                  <div className=" skills mt-3">
                    <div className="icon">
                      <h6>
                        <i className="fa-solid fa-code"></i> Working Technology :
                      </h6>
                    </div>
                    <div className="working-tech ">
                      <span className="badge rounded-pill text-bg-secondary">
                        Javascript
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Reactjs
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Nodejs
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Expressjs
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        MonogoDB
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Mongoose
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Bootstrap
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        MaterialUI
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Rest Api
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Firebase
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        HTML5
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        CSS3
                      </span>
                    </div>
                  </div>
                  <div className="skills mt-3">
                    <div className="icon">
                      <h6>
                        <i className="fa-solid fa-laptop-code"></i> Comfortable :
                      </h6>
                    </div>
                    <div className="working-tech ">
                      <span className="badge rounded-pill text-bg-secondary">
                        Nodejs
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Expressjs
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        MonogoDB
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Mongoose
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Bootstrap
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        MaterialUI
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Rest Api
                      </span>
                    </div>
                  </div>
                  <div className="skills mt-3">
                    <div className="icon">
                      <h6>
                        <i className="fa-solid fa-screwdriver-wrench"></i> Dev Tools
                        :
                      </h6>
                    </div>
                    <div className="working-tech ">
                      <span className="badge rounded-pill text-bg-secondary">
                        VS Code
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Github
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Git
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Chrome dev tool
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Heroku
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Netlify
                      </span>
                      <span className="badge rounded-pill text-bg-secondary">
                        Figma
                      </span>
                    </div>
                  </div>

                  {/* <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">95%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>JavaScript</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Reactjs</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '70%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <div className="lead">
                      <p>
                        I'm a web developer with a focus on the MERN stack, but
                        still exploring other technologies and frameworks that
                        catch my interest! if you're looking for a developer to
                        add to your team, I'd love to hear from you!
                      </p>
                    </div>
                    <div className="lead mt-3">
                      <span className="icon">
                        <h6>
                          <i className="fa-solid fa-user-graduate"></i> Education
                          ---
                        </h6>
                      </span>
                      <p style={{ fontWeight: 'bold' }}>Uttara University</p>
                      <p>BSc in Computer Science and Engineering</p>
                      <ul>
                        <li>Passing Year : 2021</li>
                      </ul>
                    </div>

                    <div className="lead mt-3">
                      <span className="icon">
                        <h6>
                          <i className="fa-solid fa-file-code"></i> Courses ---
                        </h6>
                      </span>
                      <p >
                        1. Complete Web Development Course / Programming Hero{' '}
                        <br />
                        2. ReactJS - Complete Guide for Frontend Web
                        Development(2021) / Udemy <br />
                        3. HTML,CSS & JavaScript- Certification Course for Beginners / Udemy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
