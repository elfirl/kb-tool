import React, { Component } from "react";
import TitleLogo from "../assets/images/logo.svg";
import MailIcon from "../assets/images/xfinity-mail.svg";
import PhoneIcon from "../assets/images/xfinity-phone.svg";

class NavbarFull extends Component {
  render() {
    return (
      <div className="wrapper header-content">
        <a className="site-title" href="/">
          <img src={TitleLogo} alt="Site Title" />
        </a>
        <div className="contact-info">
          Contact Support:
          <br />
          <a>
            <img src={MailIcon} alt="xfinity email" />
          </a>
          |
          <a>
            <img src={PhoneIcon} alt="xfinity phone" />
          </a>
        </div>
      </div>
    );
  }
}

export default NavbarFull;
