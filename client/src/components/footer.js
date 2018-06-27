import React, { Component } from "react";
import xfinitylogo from "../assets/images/logo.svg";
import MailIcon from "../assets/images/xfinity-mail.svg";
import PhoneIcon from "../assets/images/xfinity-phone.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer h-card">
        <data className="u-url" href="/" />
        <div className="wrapper">
          <h2 className="footer-heading">
            <img src={xfinitylogo} alt="xfinity logo" />
          </h2>
          <section className="footer-col-wrapper">
            <p>
              If you still need assistance with your Xfinity Community device,
              please contact support:
            </p>
            <div className="contact-info">
              <a href="mailto:xfcsupport@comcast.net">
                <img src={MailIcon} alt="xfinity mail" />
              </a>
              |
              <a href="tel:1-877-262-4020">
                <img src={PhoneIcon} alt="xfinity phone" />
              </a>
            </div>

            <div className="footer-links">
              <a href="/eula">EULA</a>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
