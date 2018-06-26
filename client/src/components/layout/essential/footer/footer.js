import React, { Component } from 'react';
import FooterTop from './footertop';
import FooterBottom from './footerbottom';

class Footer extends Component {
    render() {
        return (
            <footer className='site-footer h-card'>
                <data className="u-url" href="/"></data>
                <div className='wrapper'>
                    <FooterTop />
                    <FooterBottom />
                </div>
            </footer>
        )
    }
}

export default Footer;