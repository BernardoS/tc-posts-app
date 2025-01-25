import {
    LoginContainer,
    LoginContent,
    LoginSubTitle,
    LoginTitle,
    LoginInput,
    Logo,
    WhiteSeparator,
    LoginInputLabel,
    ButtonContainer,
    LoginButton,
    RegisterButton
} from "@/styles/loginStyles";
import LogoHeaderMenu from "../assets/images/logo-header-menu.png";
import { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { Text } from "react-native";

export default function Index() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*useEffect(()=>{
        const user = auth.currentUser;
        console.log(user);
        console.log(user?.email);
        if(user != null){
            navigation.navigate('home');
        }
    },[])*/


    const handleLogin = async () => {
        try {
            //const response = await signInWithEmailAndPassword(auth,email,password);
            router.navigate('/private');
        } catch (error) {
            console.log('Error');
            //setError(error.message);
        }
    }

    return (
        <LoginContainer>
            <LoginContent>
                <Logo source={LogoHeaderMenu} />
                <WhiteSeparator />
                <LoginSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>Login</LoginSubTitle>
                <LoginInputLabel style={{ fontFamily: 'MavenPro-Bold' }}>E-mail</LoginInputLabel>
                <LoginInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite o seu e-mail" />
                <LoginInputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Senha</LoginInputLabel>
                <LoginInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    secureTextEntry />
                <ButtonContainer>
                    <LoginButton onPress={handleLogin }>
                        <Text style={{ fontFamily: 'MavenPro-Bold', fontSize: 16, color:'#08244B' }}>Entrar</Text>
                    </LoginButton>
                </ButtonContainer>
            </LoginContent>
        </LoginContainer>
    )
}

