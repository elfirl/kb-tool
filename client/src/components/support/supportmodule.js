import React, { Component } from "react";
import SupportArticles from "./supportarticles";

class SupportModules extends Component {
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
    return (
      <section className="support-container">
        {this.state.articles.map(article => (
          <div key={article.id} className="support-module">
            <p className="support-image">
              <img src="http://via.placeholder.com/250x250" alt="category" />
            </p>
            <h3>{article.category}</h3>
            <SupportArticles />
          </div>
        ))}
      </section>
    );
  }
}

export default SupportModules;
