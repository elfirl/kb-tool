import React, { Component } from 'react';

class NavbarLeft extends Component {
    render() {
        return (
            <a className='site-title' href='/'>
                <img src='/src/assets/images/logo.svg' alt='Site Title'/>
            </a>
        );
    }
}

export default NavbarLeft;