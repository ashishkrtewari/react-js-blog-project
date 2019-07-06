import React from 'react';

export default function PostPreview({ post, selectedView }) {
  if (selectedView === 'card') {
    return (
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="https://source.unsplash.com/382x180/?portrait,people" alt="Card image cap" />
          <div className="card-body text-container">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Posted By: {post.userId}</small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post-container d-flex">
        <div className="text-container">
          <div className="post-title">
            <h2>{post.title}</h2>
          </div>
          <div className="post-desc">
            <p>{post.body}</p>
          </div>
        </div>
        <div className="image-container">
          <img className="" src="https://source.unsplash.com/200x200/?portrait" />
        </div>
      </div>
    );
  }
}