import React, { Component } from "react";

class SupportArticles extends Component {
  constructor() {
    super();
    this.state = {
      article: []
    };
  }

  render() {
    return (
      <ul className="support-list">
        {this.state.article.map(article => (
          <a href={"/this/"}>
            <li />
          </a>
        ))}
      </ul>
    );
  }
}

export default SupportArticles;
