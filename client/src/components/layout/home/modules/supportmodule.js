import React, { Component } from 'react';
import SupportArticles from './supportarticles';

class SupportModules extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('/new/api/articles')
            .then(res => res.json())
            .then(articles => this.setState({articles}, () => console.log('Articles fetched..', 
      articles)));
    }

    render() {
        return (
            <section className='support-container'>
                {this.state.articles.map(article =>
                    <div key={ article._id } className='support-module'>
                        <p className='support-image'>
                            <img src='http://via.placeholder.com/250x250'/>
                        </p>
                        <h3>{ article.title }</h3>
                        <SupportArticles />
                        <a>
                        </a>
                    </div>
                )}
            </section>
        )
    }
}


export default SupportModules;