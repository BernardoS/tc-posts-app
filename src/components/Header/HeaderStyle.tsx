import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    display:flex;
    height:80px;
    background-color:#1E4071;
    width:100%;
    justify-content:center;
    align-items:center;
    padding:0px 32px;
    font-size:30px;
    flex-direction:row;
`;

export const MenuButton = styled.TouchableOpacity`
    width:64px;
    height:40px;
    display:flex;
    justify-content:center;
    position:absolute;
    left:10%;
`;

export const LogoContainer = styled.View`
    width:100%;
    display:flex;
    align-items:center;
`

export const LogoHeader = styled.Image`
    height:48px;
    width:auto;
    aspect-ratio:341/110;
`

