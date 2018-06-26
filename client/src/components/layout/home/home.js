import React, { Component } from 'react';
import Header from '../essential/header/header';
import Footer from '../essential/footer/footer';
import HomeBody from './homebody';

class Home extends Component {
    render() {
       return (
            <div>
                <Header />
                <HomeBody />
                <Footer />
            </div>
        )
    }
}

export default Home;