import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = () => {
  return (
    <div className=" mx-auto  text-center mt-2" role="alert">
      Message sent successfully
    </div>
  );
};

const Contact = () => {
  
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_waqujbr',
        'template_eqdmp8b',
        e.target,
        'user_FLCwzFqK5ymjUnsCTOQMh'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide results
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="title-box text-center">
              <h3 className="title-a">Contact me</h3>

              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row contactus">
          <div className="col-md-6">
            <div className="title-box-2">
              <h5 className="title-left">Send Message Us</h5>
            </div>

            <div>
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">{result ? <Result /> : null}</div>

                  <div className="col-md-12 text-center my-3">
                    <button
                      type="submit"
                      className="button button-a button-big button-rouded"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="title-box-2 pt-4 pt-md-0">
              <h5 className="title-left">Get in Touch</h5>
            </div>

            <div className="information">
              <p>
                I'm a web developer with a focus on the MERN stack, but still
                exploring other technologies and frameworks that catch my
                interest! if you're looking for a developer to add to your team,
                I'd love to hear from you
              </p>
            </div>
            <div className="address">
              <p>
                <i className="fa-solid fa-location-dot"></i> Savar, Dhaka,
                Bangladesh
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> (+880) 1770259626
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>{' '}
                yeasirarafat1776@gmail.com
              </p>
            </div>
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
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </section>
  );
};

export default Contact;
