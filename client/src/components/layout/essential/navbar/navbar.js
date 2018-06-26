import React, { Component } from 'react';
import NavbarRight from './navright';
import NavbarLeft from './navleft';


class NavbarFull extends Component {
    render() {
        return (
            <div className='wrapper header-content'>
                <NavbarLeft />
                <NavbarRight />

            </div>
        )
    }
}

export default NavbarFull;