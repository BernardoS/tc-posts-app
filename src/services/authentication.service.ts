import { auth } from "@/services/firebase.service";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

interface loginWithFirebaseParams {
    email: string,
    password: string
}


export const loginWithFirebase = async ({email,password}:loginWithFirebaseParams) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const userToken = await response.user.getIdToken();
        return userToken;
    } catch (error) {
        console.log(error);
        throw new Error("[loginWithFirebase] Erro ao autenticar com o firebase");
    }
}

export const logoutWithFirebase = async () => {
    try {
        signOut(auth);
    } catch (error) {
        console.log(error);
        throw new Error("[logoutWithFirebase] Erro ao deslogar da plataforma");
    }
}


