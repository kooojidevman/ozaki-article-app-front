import React, { useEffect, useState } from 'react';
import { List, Button } from 'antd';
import { fetchPosts } from '../services/api';
import PostCard from './PostCard';
import { Post } from '../types'; // Postの型をインポート（後述）

interface HomeProps {
  token: string; // tokenをプロパティとして受け取る
}

const Home: React.FC<HomeProps> = ({ token }) => {
  const [posts, setPosts] = useState<Post[]>([]); // Post型を使用

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchPosts(token); // tokenを使ってAPI呼び出し
        setPosts(response.data);
      } catch (error) {
        console.error('投稿の取得に失敗しました:', error);
      }
    };
    loadPosts();
  }, [token]); // tokenが変わるたびに再取得する

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      <List
        itemLayout="vertical"
        dataSource={posts}
        renderItem={(post) => <PostCard post={post} />}
      />
      <Button type="primary" onClick={() => {/* 投稿作成画面へ遷移する処理 */}}>
        新規投稿
      </Button>
    </div>
  );
};

export default Home;
