import  React, { Component } from 'react';
import NavbarFull from '../navbar/navbar';

class Header extends Component {
    render() {
        return (
            <header className='site-header' role='banner'>
                <NavbarFull />
            </header>
        )
    }
}

export default Header;