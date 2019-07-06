import React from 'react';

export default function Post({ post }) {
  if (post) {
    return (
      <div className="single-post-container">
        <div className="image-container mb-3">
          <img className="img-thumbnail" src="https://source.unsplash.com/1920x600/?portrait,people" />
        </div>
        <div className="text-container container">
          <div className="post-title">
            <h2>{post.title}</h2>
          </div>
          <div className="post-desc">
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (<div>...</div>)
  }
}