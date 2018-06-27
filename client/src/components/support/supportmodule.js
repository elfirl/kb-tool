import React, { Component } from "react";
import SupportArticles from "./supportarticles";
import article from "../../fakeDB/articles.json";

class SupportModules extends Component {
  constructor() {
    super();
    this.state = {
      articles: [article]
    };
  }

  render() {
    return (
      <section className="support-container">
        {this.state.articles.map(article => (
          <div key={article._id} className="support-module">
            <p className="support-image">
              <img src="http://via.placeholder.com/250x250" alt="category" />
            </p>
            <h3>{article.accounts.name}</h3>
            <SupportArticles />
          </div>
        ))}
      </section>
    );
  }
}

export default SupportModules;
