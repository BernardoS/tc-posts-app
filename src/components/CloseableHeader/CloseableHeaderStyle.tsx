import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    display:flex;
    flex-direction:column;
`;

export const ContainerLine = styled.View`
    display:flex;
    height:2px;
    background-color:#FCC918;
    width:100%
`;

export const HeaderContent = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:5%;
    background-color:#1E4071;
    gap:16px;
    height:80px;
`;

export const HeaderCloseButton = styled.TouchableOpacity`
    height:30px;
    width:30px;
`;
export const HeaderTitle = styled.Text`
    color:#FCC918;
    font-size:24px;
`;