import React from 'react';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedView: 'card'
    }
  }
  handleViewChange(e) {
    const selectedView = e.target.value;
    this.setState({ selectedView });
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to our Blog</h1>
            <p className="lead">This project showcases the basic concepts of React</p>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group btn-group-toggle container col-sm-6 col-lg-4" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="card" value="card" autocomplete="off" onChange={e => this.handleViewChange(e)} checked={this.state.selectedView === 'card'} /> Card Design
      </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="row" value="row" autocomplete="off" onChange={e => this.handleViewChange(e)} checked={this.state.selectedView === 'row'} /> Row Design
      </label>
          </div>
        </div>

        <div className="home-container row d-flex justify-content-center">
          {this.props.posts.map((post, i) => {
            if (i < 11) {
              return (<Link className={`col-sm-10 col-lg-5 mb-3 ${this.state.selectedView === 'card' ? 'col-md-5' : ''} `} to={`/post/${post.id}`} key={post.id}><PostPreview selectedView={this.state.selectedView} post={post} /></Link>)
            }
          }
          )}
        </div>
      </div>
    );
  }
}

export default Home;