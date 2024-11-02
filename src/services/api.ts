import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
};

const api = applyCaseMiddleware(
  axios.create({
    baseURL: "http://127.0.0.1:3101/api/v1",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    },
  })
);

// ユーザー登録API
export const register = (username: string, email: string, password: string) => {
  return api.post("/auth/register", { username, email, password });
};

// ログインAPI
export const login = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};

// 投稿の取得API
export const fetchPosts = (token: string) => {
  return api.get("/posts", { headers: { Authorization: token } });
};

// 投稿の作成API
export const createPost = (content: string, token: string) => {
  return api.post("/posts", { content }, { headers: { Authorization: token } });
};

export default api;
