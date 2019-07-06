import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result
          });
        },
        (error) => {
          this.setState({
            posts: []
          });
        }
      )
  }

  render() {
    const { posts } = this.state;
    return (
      <Router>
        <div>
          <Header />
          <Route exact={true} path="/" render={() => (<Home posts={posts} />)} />
          {posts && (
            <Route path="/post/:postId" render={({ match }) => (<Post post={posts.find(p => p.id == match.params.postId)} />)} />
          )}
          <Route exact={true} path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
