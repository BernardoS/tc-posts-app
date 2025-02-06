import axios from 'axios';
import { auth } from './firebase.service';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken(true); // Force refresh the token
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface getUserByEmailParams {
  email: string
}

export const getUserByEmail = async ({ email }: getUserByEmailParams) => {
  try {
    const user: any = await api.get(`/private/user/email/${email}`);
    if (user)
      return user.data[0];

    if (!user)
      return null;
  } catch (error) {
    console.log(error);
    throw new Error("[getUserByEmail] Erro ao buscar os dados do usuário no banco de dados");
  }

}

export const getAllPosts = async () => {
  try {
    const posts: any = await api.get(`/public/posts`);
    if (posts)
      return posts.data;

    if (!posts)
      return null;
  } catch (error) {
    console.log(error);
    throw new Error("[getAllPosts] Erro ao buscar os dados do usuário no banco de dados");
  }
}


interface getPostByIdParams {
  id: string
}

export const getPostById = async ({id}:getPostByIdParams) => {
  try {
    const post: any = await api.get(`/public/posts/${id}`);
    if (post)
      return post.data;

    if (!post)
      return null;
  } catch (error) {
    console.log(error);
    throw new Error("[getAllPosts] Erro ao buscar os dados do usuário no banco de dados");
  }
}

export default api;
