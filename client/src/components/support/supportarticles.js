import React, { Component } from "react";

class SupportArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/fake/test")
      .then(res => res.json())
      .then(articles =>
        this.setState({ articles }, () =>
          console.log("Articles fetched..", articles)
        )
      );
  }

  render() {
    let i;
    const articleTitles = this.state.articles.map(article => {
      for (i = 0; i < 3; i++) {
        return (
          <a>
            <li>{article.category[i]}</li>
          </a>
        );
      }
    });

    return <ul className="support-list">{articleTitles}</ul>;
  }
}

export default SupportArticles;
