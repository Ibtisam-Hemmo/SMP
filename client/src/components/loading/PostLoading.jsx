import React from 'react';
import './loading.css'
const PostSkeleton = () => {
  return (
    <div className="post-skeleton">
      <div className="post-skeleton__header">
        <div className="post-skeleton__avatar"></div>
        <div className="post-skeleton__details">
          <div className="post-skeleton__line"></div>
          <div className="post-skeleton__line"></div>
        </div>
      </div>
      <div className="post-skeleton__content">
        <div className="post-skeleton__line"></div>
        <div className="post-skeleton__line"></div>
        <div className="post-skeleton__line"></div>
        <div className="post-skeleton__line"></div>
      </div>
    </div>
  )
}

export default PostSkeleton;
