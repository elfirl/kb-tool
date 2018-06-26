import React, { Component } from 'react';
import SupportModules from './modules/supportmodule';
import HomeIntro from './homeintro';


class HomeBody extends Component {
    render() {
        return (
            <main className='page-content' aria-label="Content">
                <div className='wrapper'>
                    <HomeIntro />
                    <SupportModules />

                </div>
            </main>
        )
    }
}

export default HomeBody;