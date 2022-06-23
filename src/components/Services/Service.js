import React from 'react';

const Service = () => {
  return (
    //  ==== Services Section ======
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="fa-solid fa-palette"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="fas fa-layer-group"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="fas fa-list-ul"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
