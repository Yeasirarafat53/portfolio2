import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <div>
      <ScrollToTop smooth top="1000" width="20" color="white" className="scroll" />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box text-center">
                <p className="copyright">
                  &copy; Copyright <strong>Yeasir Arafat</strong>. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
