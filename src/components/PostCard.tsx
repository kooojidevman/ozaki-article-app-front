// src/components/PostCard.tsx
import React from 'react';
import './PostCard.css'; // CSSスタイルシートをインポート
import { Post } from '../types'; // Postの型をインポート

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="username">{post.username}</h3>
        <span className="post-date">{post.createdAt}</span>
      </div>
      <p className="post-content">{post.content}</p>
    </div>
  );
};

export default PostCard;
