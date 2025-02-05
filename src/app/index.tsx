import {
    LoginContainer,
    LoginContent,
    LoginSubTitle,
    LoginInput,
    Logo,
    WhiteSeparator,
    LoginInputLabel,
    ButtonContainer,
    LoginButton
} from "@/styles/loginStyles";
import LogoHeaderMenu from "../assets/images/logo-header-menu.png";
import { useState } from "react";
import { Alert, Text } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function Index() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedInTrue } = useAuth();

    const handleLogin = async () => {
        if (email == '' || password == '') {
            Alert.alert('Preencha os campos corretamente', 'Verifique se você preencheu corretamente seu usuário e senha', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        setLoggedInTrue({ email, password });
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
                    <LoginButton onPress={handleLogin}>
                        <Text style={{ fontFamily: 'MavenPro-Bold', fontSize: 16, color: '#08244B' }}>Entrar</Text>
                    </LoginButton>
                </ButtonContainer>
            </LoginContent>
        </LoginContainer>
    )
}

