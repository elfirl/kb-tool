import React, { Component } from 'react';

class FooterBottom extends Component {
  render() {
      return (
          <section className='footer-col-wrapper'>
              <p>
                  If you still need assistance with your Xfinity Community device, please contact support:
              </p>
              <div className='contact-info'>
                  <a href="mailto:xfcsupport@comcast.net">
                      <img src="/src/assets/images/xfinity-mail.svg" alt='xfinity mail' />
                  </a>
                      |
                  <a href="tel:1-877-262-4020">
                      <img src="/src/assets/images/xfinity-phone.svg" alt='xfinity phone' />
                  </a>
              </div>

              <div className='footer-links'>
                  <a href="/eula">EULA</a>
              </div>

          </section>
      )
  }
}

export default FooterBottom;