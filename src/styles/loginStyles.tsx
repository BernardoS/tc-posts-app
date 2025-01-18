import styled from "styled-components/native";

export const LoginContainer = styled.View`
    background-color:#1E4071;
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
`;

export const LoginContent = styled.View`
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    max-width:340px;
`;

export const Logo = styled.Image`
    display:flex;
`;

export const WhiteSeparator = styled.View`
    display:flex;
    width:100%;
    height:4px;
    background-color:white;
    margin:32px 0px;
`;

export const LoginTitle = styled.Text`
    color:#FCC918;
    font-size:32px;
`;

export const LoginSubTitle = styled.Text`
    color:#FFF;
    font-size:24px;
`

export const LoginInput = styled.TextInput`
    width:100%;
    border:2px solid #08244B;
    border-radius:10px;
    height:64px;
    padding-left:32px;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
    background-color:#F6F6F6;
`;

export const LoginInputLabel = styled.Text`
    color:#FCC918;
    font-size:16px;
    align-self:start;
    margin:8px 0px 4px 8px;
`;

export const ButtonContainer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;

export const RegisterButton = styled.TouchableOpacity`
    background-color:#08244B;
    border:2px solid #FCC918;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:45%;
    margin:32px 0px;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color:#FCC918;
    border:2px solid #08244B;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:45%;
    margin:32px 0px;
`;