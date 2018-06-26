import React, { Component } from 'react';

class SupportArticles extends Component {
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
            <ul className='support-list'>
                {this.state.articles.map(article =>
                    <a href={'/this/is/a/thing/' + article._id}>
                        <li>{ article.body }</li>
                    </a>
                )}
            </ul>
        )
    }
}

export default SupportArticles;