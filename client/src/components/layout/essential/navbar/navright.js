import React, { Component } from 'react';

class NavbarRight extends  Component {
    render() {
        return (
            <div className='contact-info'>
                    Contact Support: 
                    <br />
                <a>
                    <img src='/src/assets/images/xfinity-mail.svg' alt='xfinity email' />
                </a>
                      | 
                <a>
                    <img src='/src/assets/images/xfinity-phone.svg' alt='xfinity phone' />
                </a>
            </div>
        )
    }
}

export default NavbarRight;