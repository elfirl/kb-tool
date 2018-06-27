import React, { Component } from "react";
import SupportArticles from "./supportarticles";

class SupportModules extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: "1",
          category: "Accounts",
          articles: [
            {
              id: "1",
              title: "Unlock a Door",
              body: "Example Body Stuff"
            },
            {
              id: "2",
              title: "Select a Different Door",
              body: "Example Body Stuff"
            },
            {
              id: "3",
              title: "Re-scan for Doors",
              body: "Example Body Stuff"
            }
          ]
        },
        {
          id: "2",
          category: "Locks",
          articles: [
            {
              id: "1",
              title: "Unlock a Door",
              body: "Example Body Stuff"
            },
            {
              id: "2",
              title: "Select a Different Door",
              body: "Example Body Stuff"
            },
            {
              id: "3",
              title: "Re-scan for Doors",
              body: "Example Body Stuff"
            }
          ]
        }
      ]
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
            <h3>{article.category}</h3>
            <a>
              <li>{article.articles[0].body}</li>
            </a>
          </div>
        ))}
      </section>
    );
  }
}

export default SupportModules;
