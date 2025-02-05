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

interface getUserByEmailParams{
    email:string
}

export const getUserByEmail = async ({email}:getUserByEmailParams) =>{
    try {
        const user:any = await api.get(`/private/user/email/${email}`);
        if(user)
            return user.data[0];
        
        if(!user)
            return null;
    } catch (error) {
        console.log(error);
        throw new Error("[getUserByEmail] Erro ao buscar os dados do usuário no banco de dados");
    }
   
}

export default api;
